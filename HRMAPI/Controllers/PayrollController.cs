using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HRMAPI.DTOs.Common;
using HRMAPI.DTOs.Payroll;
using HRMAPI.Models;
using HRMAPI.Services;

namespace HRMAPI.Controllers;

[Route("api/payroll")]
public class PayrollController : BaseController
{
    private readonly IPayrollService _payrollService;
    private readonly IUserService _userService;

    public PayrollController(IPayrollService payrollService, IUserService userService)
    {
        _payrollService = payrollService;
        _userService = userService;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<PaginatedResponse<PayrollRecordDto>>>> GetAll(
        [FromQuery] PaginationQuery query, [FromQuery] string? month = null, [FromQuery] int? year = null, [FromQuery] string? status = null)
    {
        var result = await _payrollService.GetPayrollAsync(query, month, year, status);
        return Ok(ApiResponse<PaginatedResponse<PayrollRecordDto>>.Ok(result));
    }

    [HttpGet("employee/{employeeId:guid}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PayrollRecordDto>>>> GetByEmployee(Guid employeeId)
    {
        var result = await _payrollService.GetByEmployeeAsync(employeeId);
        return Ok(ApiResponse<List<PayrollRecordDto>>.Ok(result));
    }

    [HttpGet("my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<PayrollRecordDto>>>> GetMyPayroll()
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _payrollService.GetByEmployeeAsync(user.EmployeeId.Value);
        return Ok(ApiResponse<List<PayrollRecordDto>>.Ok(result));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<PayrollRecordDto>>> Create([FromBody] CreatePayrollDto dto)
    {
        var result = await _payrollService.CreateAsync(dto);
        return Ok(ApiResponse<PayrollRecordDto>.Ok(result, "Payroll created."));
    }

    [HttpPut("{id:guid}/status")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<PayrollRecordDto>>> UpdateStatus(Guid id, [FromBody] string status)
    {
        var result = await _payrollService.UpdateStatusAsync(id, status);
        return Ok(ApiResponse<PayrollRecordDto>.Ok(result, "Payroll status updated."));
    }

    [HttpGet("payslip/my")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<PayslipDto>>> GetMyPayslip([FromQuery] string month, [FromQuery] int year)
    {
        var user = await _userService.GetByIdAsync(CurrentUserId);
        if (user?.EmployeeId == null)
            return BadRequest(ApiResponse<object>.Fail("User is not linked to an employee."));
        var result = await _payrollService.GetPayslipAsync(user.EmployeeId.Value, month, year);
        return Ok(ApiResponse<PayslipDto>.Ok(result));
    }

    [HttpGet("payslip/{payrollId:guid}")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<PayslipDto>>> GetPayslip(Guid payrollId)
    {
        var result = await _payrollService.GeneratePayslipAsync(payrollId);
        return Ok(ApiResponse<PayslipDto>.Ok(result));
    }

    [HttpGet("deductions")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<PayrollDeductionDto>>>> GetDeductions()
    {
        var result = await _payrollService.GetDeductionsAsync();
        return Ok(ApiResponse<List<PayrollDeductionDto>>.Ok(result));
    }

    [HttpGet("bonuses")]
    [Authorize(Roles = "ADMIN,HR")]
    public async Task<ActionResult<ApiResponse<List<PayrollBonusDto>>>> GetBonuses()
    {
        var result = await _payrollService.GetBonusesAsync();
        return Ok(ApiResponse<List<PayrollBonusDto>>.Ok(result));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult<ApiResponse<object>>> Delete(Guid id)
    {
        var success = await _payrollService.DeleteAsync(id);
        return Ok(ApiResponse<object>.Ok(new { success }, "Payroll deleted."));
    }
}
