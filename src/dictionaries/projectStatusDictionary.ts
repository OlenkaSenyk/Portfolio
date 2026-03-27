export type ProjectStatus = "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";

type BadgeVariant = "default" | "secondary" | "ghost";

export const projectStatusDictionary: Record<ProjectStatus, { label: string, variant: BadgeVariant }> = {
    IN_PROGRESS: {
        label: "In Progress",
        variant: "default",
    },
    COMPLETED: {
        label: "Completed",
        variant: "secondary",
    },
    ARCHIVED: {
        label: "Archived",
        variant: "ghost"
    }
};
