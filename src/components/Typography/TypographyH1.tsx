import { cn } from "@/lib/utils.ts";

export default function TypographyH1({ text, className }: { text: string; className?: string }) {
    return (
        <h1 className={cn("max-w-150 font-bold text-[36px] md:text-[60px] leading-12 md:leading-16", className)}>
            {text}
        </h1>
    );
}