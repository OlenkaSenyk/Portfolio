import TypographyH2 from "@/components/Typography/TypographyH2.tsx";
import AboutMeSection from "./components/AboutMeSection.tsx";
import TechStackSection from "./components/TechStackSection.tsx";

export default function About() {
    return (
        <div className="px-5 lg:px-10 xl:px-40 mx-auto">
            <TypographyH2 text="About Me" className="mb-5" />
            <AboutMeSection />
            <TypographyH2 text="Tech Stack" className="my-5" />
            <TechStackSection />
        </div>
    );
}