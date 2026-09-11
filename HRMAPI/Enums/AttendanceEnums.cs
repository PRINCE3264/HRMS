namespace HRMAPI.Enums;

public enum AttendanceStatus
{
    PRESENT = 0,
    ABSENT = 1,
    HALF_DAY = 2,
    LATE = 3,
    ON_LEAVE = 4,
    HOLIDAY = 5,
    WEEK_OFF = 6
}

public enum EmploymentType
{
    FULL_TIME = 0,
    PART_TIME = 1,
    CONTRACT = 2,
    INTERN = 3,
    FREELANCER = 4
}

public enum EmploymentStatus
{
    ACTIVE = 0,
    INACTIVE = 1,
    ON_NOTICE = 2,
    TERMINATED = 3,
    RESIGNED = 4
}

public enum AttendanceCorrectionStatus
{
    PENDING = 0,
    APPROVED = 1,
    REJECTED = 2
}

public enum OvertimePolicy
{
    NONE = 0,
    DAILY = 1,
    WEEKLY = 2
}

