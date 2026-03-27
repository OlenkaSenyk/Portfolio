import type { ProjectCardProps } from "@/components/ProjectCard/types.ts";
import { projects } from "../constants.ts";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import TypographyH2 from "@/components/Typography/TypographyH2.tsx";

export default function ProjectsSection({ className }: { className?: string }) {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <div className={className}>
            <TypographyH2 text="Featured About" />
            <Carousel className="w-full mt-5" plugins={[plugin.current]}>
                <CarouselContent className="mb-15 justify-start -ml-0">
                    {projects.map((project: ProjectCardProps) => (
                        <CarouselItem key={project.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-0 sm:mx-0">
                            <ProjectCard project={project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}