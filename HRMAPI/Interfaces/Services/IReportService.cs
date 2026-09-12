using HRMAPI.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using HRMAPI.Data;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Organization;
using HRMAPI.Models.DTOs.Report;
using HRMAPI.Models.DTOs.System;
using HRMAPI.Enums;
using HRMAPI.Models.Entities;
using HRMAPI.Interfaces.Repositories;

namespace HRMAPI.Interfaces.Services;

public interface IReportService
{
    Task<DashboardStatsDto> GetDashboardStatsAsync();
    Task<ChartDataDto> GetAttendanceTrendAsync(int days = 7);
    Task<ChartDataDto> GetDepartmentDistributionAsync();
    Task<ChartDataDto> GetPayrollTrendAsync(int months = 6);
    Task<List<AuditLogDto>> GetAuditLogsAsync(string? module = null);
    Task<List<SystemSettingDto>> GetSettingsAsync(string? category = null);
    Task<SystemSettingDto> UpdateSettingAsync(Guid id, UpdateSystemSettingDto dto, Guid updatedById);
    Task<List<AnnouncementDto>> GetAnnouncementsAsync(string? role = null);
    Task<AnnouncementDto> GetAnnouncementAsync(Guid id);
    Task<AnnouncementDto> CreateAnnouncementAsync(CreateAnnouncementDto dto, Guid authorId);
    Task<AnnouncementDto> UpdateAnnouncementAsync(Guid id, CreateAnnouncementDto dto);
    Task<bool> DeleteAnnouncementAsync(Guid id);
    Task<List<DocumentDto>> GetDocumentsAsync(string? employeeId = null, string? category = null);
    Task<DocumentDto> GetDocumentAsync(Guid id);
    Task<DocumentDto> UploadDocumentAsync(Guid uploadedById, Guid? employeeId, string category, string fileName, string contentType, long fileSize, string fileUrl);
    Task<bool> DeleteDocumentAsync(Guid id);
    Task<List<UpcomingBirthdayDto>> GetUpcomingBirthdaysAsync(int days = 7);
    Task<AdminAnalyticsDto> GetAdminAnalyticsAsync();
    Task<HrReportsDto> GetHrReportsAsync();
    Task<List<NotificationDto>> GetNotificationsAsync(Guid userId, bool? isRead = null);
    Task<int> GetUnreadNotificationsAsync(Guid userId);
    Task<bool> MarkNotificationReadAsync(Guid id);
    Task<bool> MarkAllNotificationsReadAsync(Guid userId);
    Task<bool> DeleteNotificationAsync(Guid id);
    Task<List<ReportingNodeDto>> GetReportingHierarchyAsync();
    Task<List<ReportingFlatDto>> GetReportingMapAsync();
    Task<CompanyProfileDto> GetCompanyProfileAsync();
    Task<CompanyProfileDto> UpsertCompanyProfileAsync(UpsertCompanyProfileDto dto);
    Task<List<NotificationPreferenceDto>> GetNotificationPreferencesAsync();
    Task<NotificationPreferenceDto> UpdateNotificationPreferenceAsync(Guid id, UpdateNotificationPreferenceDto dto, Guid updatedBy);
    Task<EmailSmsConfigDto> GetEmailSmsConfigAsync();
    Task<EmailSmsConfigDto> SaveEmailSmsConfigAsync(SaveEmailSmsConfigDto dto, Guid updatedBy);
}
