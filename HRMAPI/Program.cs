using HRMAPI.Interfaces.Services;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using HRMAPI.Data;
using HRMAPI.Filters;
using HRMAPI.Hubs;
using HRMAPI.Middleware;
using HRMAPI.Repositories;
using HRMAPI.Interfaces.Repositories;
using HRMAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// ============ Serilog ============
var logsPath = Path.Combine(builder.Environment.ContentRootPath, "Logs");
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console()
    .WriteTo.File(Path.Combine(logsPath, "hrm-log-.txt"),
        rollingInterval: RollingInterval.Day,
        retainedFileCountLimit: 30)
    .CreateLogger();

builder.Host.UseSerilog();

// ============ Controllers + Filters ============
builder.Services.AddControllers(options =>
{
    options.Filters.Add<GlobalExceptionFilter>();
}).ConfigureApiBehaviorOptions(o => o.SuppressModelStateInvalidFilter = true);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "HRM Pro API",
        Version = "v1",
        Description = "HRM Pro - Human Resource Management Backend API"
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter your JWT token"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            Array.Empty<string>()
        }
    });
});

// ============ PostgreSQL (Npgsql) ============
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// ============ JWT Authentication ============
var jwtSection = builder.Configuration.GetSection("Jwt");
builder.Services.Configure<JwtSettings>(jwtSection);

var jwtSettings = jwtSection.Get<JwtSettings>() ?? new JwtSettings();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
    };

    // Allow access token via query string for SignalR
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var accessToken = context.Request.Query["access_token"];
            var path = context.HttpContext.Request.Path;
            if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
            {
                context.Token = accessToken;
            }
            return Task.CompletedTask;
        }
    };
});

builder.Services.AddAuthorization();

// ============ CORS ============
var corsOrigins = builder.Configuration.GetSection("Cors:Origins").Get<string[]>()
    ?? new[] { "http://localhost:4200", "http://localhost:3000" };

builder.Services.AddCors(options =>
{
    options.AddPolicy("AngularClient", policy =>
    {
        policy.WithOrigins(corsOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

// ============ SignalR ============
builder.Services.AddSignalR();

// ============ Filters ============
builder.Services.AddScoped<AuditLogFilter>();

// ============ Repositories ============
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IDesignationRepository, DesignationRepository>();
builder.Services.AddScoped<IBranchRepository, BranchRepository>();
builder.Services.AddScoped<ITeamRepository, TeamRepository>();
builder.Services.AddScoped<IAttendanceRepository, AttendanceRepository>();
builder.Services.AddScoped<IBreakRecordRepository, BreakRecordRepository>();
builder.Services.AddScoped<IShiftRepository, ShiftRepository>();
builder.Services.AddScoped<IShiftAssignmentRepository, ShiftAssignmentRepository>();
builder.Services.AddScoped<ILeaveRequestRepository, LeaveRequestRepository>();
builder.Services.AddScoped<ILeaveBalanceRepository, LeaveBalanceRepository>();
builder.Services.AddScoped<IPayrollRecordRepository, PayrollRecordRepository>();
builder.Services.AddScoped<IPayslipRepository, PayslipRepository>();
builder.Services.AddScoped<IPerformanceReviewRepository, PerformanceReviewRepository>();
builder.Services.AddScoped<IKPIRepository, KPIRepository>();
builder.Services.AddScoped<ITaskAssignmentRepository, TaskAssignmentRepository>();
builder.Services.AddScoped<ITrainingRepository, TrainingRepository>();
builder.Services.AddScoped<IOnboardingRepository, OnboardingRepository>();
builder.Services.AddScoped<IJobOpeningRepository, JobOpeningRepository>();
builder.Services.AddScoped<ICandidateRepository, CandidateRepository>();
builder.Services.AddScoped<IAnnouncementRepository, AnnouncementRepository>();
builder.Services.AddScoped<IDocumentRepository, DocumentRepository>();
builder.Services.AddScoped<INotificationRepository, NotificationRepository>();
builder.Services.AddScoped<IAuditLogRepository, AuditLogRepository>();
builder.Services.AddScoped<ISystemSettingRepository, SystemSettingRepository>();
builder.Services.AddScoped<IRolePermissionRepository, RolePermissionRepository>();
builder.Services.AddScoped<IWorkUpdateRepository, WorkUpdateRepository>();
builder.Services.AddScoped<IPerformanceFeedbackRepository, PerformanceFeedbackRepository>();
builder.Services.AddScoped<IInterviewRepository, InterviewRepository>();

// ============ Services ============
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();
builder.Services.AddScoped<IDesignationService, DesignationService>();
builder.Services.AddScoped<IBranchService, BranchService>();
builder.Services.AddScoped<ITeamService, TeamService>();
builder.Services.AddScoped<IAttendanceService, AttendanceService>();
builder.Services.AddScoped<ILeaveService, LeaveService>();
builder.Services.AddScoped<IPayrollService, PayrollService>();
builder.Services.AddScoped<IPerformanceService, PerformanceService>();
builder.Services.AddScoped<ITrainingService, TrainingService>();
builder.Services.AddScoped<IRecruitmentService, RecruitmentService>();
builder.Services.AddScoped<IReportService, ReportService>();
builder.Services.AddScoped<IRolesService, RolesService>();
builder.Services.AddScoped<INavigationService, NavigationService>();
builder.Services.AddScoped<IWorkUpdateService, WorkUpdateService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
  builder.Services.AddScoped<IManagementService, ManagementService>();
builder.Services.AddScoped<DbInitializer>();

var app = builder.Build();

// ============ Create Database & Apply Migrations ============
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    try
    {
        db.Database.Migrate();
        var initializer = scope.ServiceProvider.GetRequiredService<DbInitializer>();
        await initializer.SeedAsync();
    }
    catch (Exception ex)
    {
        Log.Error(ex, "Database migration/seed failed. If this is a fresh install, run 'dotnet ef database update'.");
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AngularClient");

app.UseMiddleware<ExceptionMiddleware>();

app.UseStaticFiles();

app.UseRouting();

app.UseMiddleware<JwtMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.UseMiddleware<AuditMiddleware>();

app.MapControllers();
app.MapHub<NotificationHub>("/hubs/notifications");

// Health check
app.MapGet("/", () => Results.Ok("HRM Pro API is running."));

app.Run();
