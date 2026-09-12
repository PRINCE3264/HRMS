using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.Models.DTOs.Common;
using HRMAPI.Models.DTOs.Organization;
using HRMAPI.Services;

using HRMAPI.Interfaces.Services;

namespace HRMAPI.Controllers;

[Route("api/org")]
public class OrganizationController : BaseController
{
    private readonly IReportService _reportService;

    public OrganizationController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet("reporting-hierarchy")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ReportingNodeDto>>>> GetReportingHierarchy()
    {
        var result = await _reportService.GetReportingHierarchyAsync();
        return Ok(ApiResponse<List<ReportingNodeDto>>.Ok(result));
    }

    [HttpGet("reporting-map")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<ReportingFlatDto>>>> GetReportingMap()
    {
        var result = await _reportService.GetReportingMapAsync();
        return Ok(ApiResponse<List<ReportingFlatDto>>.Ok(result));
    }
}