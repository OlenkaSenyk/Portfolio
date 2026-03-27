import { cn } from "@/lib/utils.ts";
import { socialMediaInfo } from "@/pages/Contact/components/ContactSection/constants.ts";

export default function Footer({ className }: { className?: string }) {
    return (
        <div className={cn("flex-col text-center w-full", className)}>
            <div className="flex items-center justify-center gap-2 mb-5">
                {socialMediaInfo.map(({ link, icon: Icon }) => (
                    <a href={link} key={link} target="_blank" className="transition-all duration-300 hover:-translate-y-1">
                        <Icon width={28} height={28} />
                    </a>
                ))}
            </div>
            <p className="border-t border-foreground/10 py-3">Olena Senyk @ 2026</p>
        </div>
    )
}