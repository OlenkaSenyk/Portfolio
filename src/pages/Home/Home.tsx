import useIsMobile from "@/hooks/useIsMobile.ts";
import HeroSection from "./components/HeroSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";

export default function Home() {
    const {isMobile} = useIsMobile();

    return (
        <div className="flex flex-col gap-16 mx-auto">
            <HeroSection className="px-5 lg:px-10 xl:px-40" isMobile={isMobile} />
            <ProjectsSection className="xl:px-40" />
        </div>
    );
}