namespace HRMAPI.Enums;

public enum TaskPriority
{
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    URGENT = 3
}

public enum TaskStatus
{
    TODO = 0,
    IN_PROGRESS = 1,
    IN_REVIEW = 2,
    COMPLETED = 3,
    BLOCKED = 4
}

public enum ReviewStatus
{
    DRAFT = 0,
    IN_PROGRESS = 1,
    COMPLETED = 2,
    PUBLISHED = 3
}

public enum FeedbackCategory
{
    MANAGER = 0,
    PEER = 1,
    SELF = 2,
    SUBORDINATE = 3
}

