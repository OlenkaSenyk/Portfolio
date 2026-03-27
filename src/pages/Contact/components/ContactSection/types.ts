import type { FC, SVGProps } from "react";

export interface ContactItemProps {
    title: string;
    link?: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    description?: string;
}
