import type { ContactItemProps } from "./types.ts";

export default function SocialMediaItem({ title, icon: Icon, link }: ContactItemProps) {
    return (
        <a className="flex gap-2 items-center hover:-translate-y-1 duration-300" href={link} target="_blank">
            <Icon width={32} height={32} />
            <p className="font-bold">{title}</p>
        </a>
    );
}