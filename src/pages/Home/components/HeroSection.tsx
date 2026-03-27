import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router";
import { img_url } from "../constants.ts";
import TypographyH1 from "@/components/Typography/TypographyH1.tsx";
import ImageSection from "@/components/ImageSection";

export default function HeroSection({ isMobile, className }: { isMobile: boolean, className?: string }) {
    return (
        <div className={cn("flex flex-col-reverse justify-center items-center gap-5 md:flex-row lg:gap-20", className)}>
            <div className="text-center md:text-left">
                <TypographyH1 text="Hi! I'm Olena, a Software Engineer" />
                <p className="mt-5 text-lg">I like building fascinating, high-performance web-applications.</p>
                <p className="text-lg">Let's create something cool together!</p>
                <div className="mt-7 flex flex-col md:flex-row gap-2 ">
                    <Button>
                        <Link to="/about">View About Me</Link>
                    </Button>
                    <Button variant="outline">
                        <Link to="/contact">Get In Touch</Link>
                    </Button>
                </div>
            </div>
            <ImageSection width={isMobile ? 250 : 380} height={isMobile ? 290 : 440} img={img_url} />
        </div>
    );
}