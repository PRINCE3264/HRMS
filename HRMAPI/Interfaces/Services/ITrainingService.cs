using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Training;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface ITrainingService
{
    Task<List<TrainingDto>> GetTrainingsAsync();
    Task<TrainingDto> CreateTrainingAsync(CreateTrainingDto dto);
    Task<TrainingDto> UpdateTrainingAsync(Guid id, CreateTrainingDto dto);
    Task<bool> DeleteTrainingAsync(Guid id);
    Task<TrainingDto> EnrollAsync(Guid trainingId, Guid employeeId);

    Task<List<OnboardingDto>> GetOnboardingsAsync();
    Task<OnboardingDto> GetOnboardingAsync(Guid id);
    Task<OnboardingDto> CreateOnboardingAsync(CreateOnboardingDto dto);
    Task<OnboardingDto> UpdateTaskStatusAsync(Guid onboardingTaskId, bool isCompleted);
    Task<OnboardingDto> GetOnboardingByEmployeeAsync(Guid employeeId);
}
