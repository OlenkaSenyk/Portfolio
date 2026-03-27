import {cn} from "@/lib/utils.ts";

export default function EmptyImg({ className }: { className?: string }) {
    return (
        <div className={cn("m-4 h-50 rounded-xl font-medium text-muted-foreground/90 text-base " +
            "flex justify-center items-center bg-background/50 backdrop-blur-2xl drop-shadow-2xl", className)}
        >
            Crafting magic
        </div>
    );
}