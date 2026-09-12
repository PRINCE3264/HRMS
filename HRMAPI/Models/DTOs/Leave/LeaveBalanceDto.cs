

namespace HRMAPI.Models.DTOs.Leave;

public class LeaveBalanceDto
{
    public string LeaveType { get; set; } = string.Empty;
    public int Entitled { get; set; }
    public int Taken { get; set; }
    public int Remaining { get; set; }
}
