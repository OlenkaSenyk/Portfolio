import { cn } from "@/lib/utils.ts";

export default function TypographyH2({ text, className }: { text: string; className?: string }) {
    return <h2 className={cn("text-center font-bold text-[32px]", className)}>{text}</h2>
}