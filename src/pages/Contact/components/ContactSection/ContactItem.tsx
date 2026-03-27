import type { ContactItemProps } from "./types.ts";

export default function ContactItem({ title, description, icon: Icon }: ContactItemProps) {
    return (
        <div className="flex gap-3 items-center">
            <div className="border-2 p-2 rounded-full w-10 h-10 flex justify-center items-center">
                <Icon width={32} height={32} />
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}