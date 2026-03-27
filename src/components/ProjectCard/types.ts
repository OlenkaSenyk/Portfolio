import type { ProjectStatus } from "@/dictionaries/projectStatusDictionary.ts";
import type { FC, SVGProps } from "react";

export interface ProjectCardProps {
    id: string;
    img?: string;
    title: string;
    badge: ProjectStatus;
    description: string;
    tools: FC<SVGProps<SVGSVGElement>>[];
    repoLink: string;
    demoLink?: string;
}