import { cn } from "@/lib/utils.ts";

export default function TypographyH3({ text, className }: { text: string; className?: string }) {
    return <h3 className={cn("font-bold text-center text-xl", className)}>{text}</h3>;
}