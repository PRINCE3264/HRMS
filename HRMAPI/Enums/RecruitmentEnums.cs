namespace HRMAPI.Enums;

public enum CandidateStatus
{
    NEW = 0,
    SCREENING = 1,
    INTERVIEW_SCHEDULED = 2,
    INTERVIEWED = 3,
    OFFERED = 4,
    HIRED = 5,
    REJECTED = 6
}

public enum JobStatus
{
    OPEN = 0,
    ON_HOLD = 1,
    CLOSED = 2,
    FILLED = 3
}

public enum InterviewStatus
{
    SCHEDULED = 0,
    RESCHEDULED = 1,
    COMPLETED = 2,
    CANCELLED = 3,
    NO_SHOW = 4
}

public enum InterviewType
{
    ONLINE = 0,
    OFFLINE = 1,
    PHONE = 2
}

