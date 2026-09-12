using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Training;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Services;



public class TrainingService : ITrainingService
{
    private readonly ITrainingRepository _trainingRepository;
    private readonly IOnboardingRepository _onboardingRepository;
    private readonly IEmployeeRepository _employeeRepository;
    private readonly ApplicationDbContext _context;

    public TrainingService(
        ITrainingRepository trainingRepository,
        IOnboardingRepository onboardingRepository,
        IEmployeeRepository employeeRepository,
        ApplicationDbContext context)
    {
        _trainingRepository = trainingRepository;
        _onboardingRepository = onboardingRepository;
        _employeeRepository = employeeRepository;
        _context = context;
    }

    public async Task<List<TrainingDto>> GetTrainingsAsync()
    {
        var trainings = await _context.Trainings.AsNoTracking().ToListAsync();
        var result = new List<TrainingDto>();
        foreach (var t in trainings)
        {
            result.Add(new TrainingDto
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                Trainer = t.Trainer,
                Department = t.Department,
                StartDate = t.StartDate,
                EndDate = t.EndDate,
                Duration = t.Duration,
                Location = t.Location,
                MaxParticipants = t.MaxParticipants,
                EnrolledCount = await _trainingRepository.GetEnrolledCountAsync(t.Id),
                Status = t.Status.ToString(),
                Type = t.Type.ToString()
            });
        }
        return result;
    }

    public async Task<TrainingDto> CreateTrainingAsync(CreateTrainingDto dto)
    {
        var type = Enum.TryParse<TrainingType>(dto.Type, true, out var t) ? t : TrainingType.IN_HOUSE;
        var training = new Training
        {
            Title = dto.Title,
            Description = dto.Description,
            Trainer = dto.Trainer,
            Department = dto.Department,
            StartDate = dto.StartDate,
            EndDate = dto.EndDate,
            Duration = dto.Duration,
            Location = dto.Location,
            MaxParticipants = dto.MaxParticipants,
            Type = type
        };
        await _trainingRepository.AddAsync(training);
        return (await GetTrainingsAsync()).First(x => x.Id == training.Id);
    }

    public async Task<TrainingDto> UpdateTrainingAsync(Guid id, CreateTrainingDto dto)
    {
        var training = await _trainingRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Training not found.");
        training.Title = dto.Title;
        training.Description = dto.Description;
        training.Trainer = dto.Trainer;
        training.Department = dto.Department;
        training.StartDate = dto.StartDate;
        training.EndDate = dto.EndDate;
        training.Duration = dto.Duration;
        training.Location = dto.Location;
        training.MaxParticipants = dto.MaxParticipants;
        training.Type = Enum.TryParse<TrainingType>(dto.Type, true, out var t) ? t : training.Type;
        await _trainingRepository.UpdateAsync(training);
        return (await GetTrainingsAsync()).First(x => x.Id == id);
    }

    public async Task<bool> DeleteTrainingAsync(Guid id)
    {
        var training = await _trainingRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException("Training not found.");
        await _trainingRepository.DeleteAsync(training);
        return true;
    }

    public async Task<TrainingDto> EnrollAsync(Guid trainingId, Guid employeeId)
    {
        var training = await _trainingRepository.GetWithEnrollmentsAsync(trainingId)
            ?? throw new KeyNotFoundException("Training not found.");
        var enrolled = await _trainingRepository.GetEnrolledCountAsync(trainingId);

        if (enrolled >= training.MaxParticipants)
            throw new InvalidOperationException("Training is already full.");

        if (await _trainingRepository.IsEnrolledAsync(trainingId, employeeId))
            throw new InvalidOperationException("Employee is already enrolled.");

        _context.TrainingEnrollments.Add(new TrainingEnrollment
        {
            TrainingId = trainingId,
            EmployeeId = employeeId
        });
        await _context.SaveChangesAsync();

        return (await GetTrainingsAsync()).First(x => x.Id == trainingId);
    }

    public async Task<List<OnboardingDto>> GetOnboardingsAsync()
    {
        var onboardings = await _context.Onboardings
            .Include(o => o.Employee)
            .Include(o => o.Mentor)
            .Include(o => o.Tasks)
            .AsNoTracking()
            .ToListAsync();
        return onboardings.Select(MapToDto).ToList();
    }

    public async Task<OnboardingDto> GetOnboardingAsync(Guid id)
    {
        var onboarding = await _onboardingRepository.GetWithTasksAsync(id)
            ?? throw new KeyNotFoundException("Onboarding not found.");
        return MapToDto(onboarding);
    }

    public async Task<OnboardingDto> CreateOnboardingAsync(CreateOnboardingDto dto)
    {
        var existing = await _onboardingRepository.GetActiveByEmployeeAsync(dto.EmployeeId);
        if (existing != null) throw new InvalidOperationException("Employee already has an active onboarding.");

        var onboarding = new Onboarding
        {
            EmployeeId = dto.EmployeeId,
            StartDate = dto.StartDate,
            MentorId = dto.MentorId,
            Status = OnboardingStatus.IN_PROGRESS
        };

        var defaultTasks = new[]
        {
            "HR Induction & Company Overview",
            "IT Equipment Setup & Access",
            "Policy & Compliance Training",
            "Department Introduction",
            "First Project Assignment",
            "Probation Review"
        }.Select(title => new OnboardingTask { Title = title });

        onboarding.Tasks = defaultTasks.ToList();
        await _onboardingRepository.AddAsync(onboarding);
        return MapToDto(onboarding);
    }

    public async Task<OnboardingDto> UpdateTaskStatusAsync(Guid onboardingTaskId, bool isCompleted)
    {
        var task = await _context.OnboardingTasks.FindAsync(onboardingTaskId)
            ?? throw new KeyNotFoundException("Onboarding task not found.");

        task.IsCompleted = isCompleted;
        task.CompletedAt = isCompleted ? DateTime.UtcNow : null;
        await _context.SaveChangesAsync();

        var onboarding = await _onboardingRepository.GetWithTasksAsync(task.OnboardingId)
            ?? throw new KeyNotFoundException("Onboarding not found.");

        var completed = onboarding.Tasks.Count(t => t.IsCompleted);
        onboarding.Progress = onboarding.Tasks.Count == 0 ? 0 : (decimal)completed / onboarding.Tasks.Count * 100;
        if (completed == onboarding.Tasks.Count) onboarding.Status = OnboardingStatus.COMPLETED;
        await _onboardingRepository.UpdateAsync(onboarding);

        return MapToDto(onboarding);
    }

    public async Task<OnboardingDto> GetOnboardingByEmployeeAsync(Guid employeeId)
    {
        var onboarding = await _onboardingRepository.GetActiveByEmployeeAsync(employeeId);
        if (onboarding == null) return new OnboardingDto { EmployeeId = employeeId, Status = OnboardingStatus.NOT_STARTED.ToString() };
        return MapToDto(onboarding);
    }

    private OnboardingDto MapToDto(Onboarding o) => new()
    {
        Id = o.Id,
        EmployeeId = o.EmployeeId,
        EmployeeName = o.Employee != null ? $"{o.Employee.FirstName} {o.Employee.LastName}" : null,
        StartDate = o.StartDate,
        EndDate = o.EndDate,
        MentorId = o.MentorId,
        MentorName = o.Mentor != null ? $"{o.Mentor.FirstName} {o.Mentor.LastName}" : null,
        Status = o.Status.ToString(),
        Tasks = o.Tasks.Select(t => new OnboardingTaskDto
        {
            Id = t.Id,
            Title = t.Title,
            Description = t.Description,
            IsCompleted = t.IsCompleted,
            CompletedAt = t.CompletedAt,
            AssignedTo = t.AssignedTo
        }).ToList(),
        Progress = o.Progress
    };
}

