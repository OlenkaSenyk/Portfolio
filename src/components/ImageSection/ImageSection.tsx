import { cn } from "@/lib/utils.ts";
import type { ImageSectionProps } from "./types.ts";

export default function ImageSection({ width = 380, height = 440, className, img }: ImageSectionProps) {
    return (
        <div className={cn("hexagon-wrapper", className)}>
            <div
                style={{width: width, height: height}}
                className={cn("hexagon-img bg-background/30 shadow-xl flex justify-center items-center")}
            >
                <img
                    alt="photo"
                    style={{width: width - 30, height: height - 40}}
                    className={cn("hexagon-img bg-cover", `w-[${width}px] h-[${height}px]`)}
                    src={img}
                />
            </div>
        </div>
    );
}