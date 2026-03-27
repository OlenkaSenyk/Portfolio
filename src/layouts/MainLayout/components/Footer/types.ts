import type { FC, SVGProps } from "react";

export interface FooterSocialMediaItem {
    icon: FC<SVGProps<SVGSVGElement>>;
    link: string;
}