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
                <TypographyH1 text="Welcome to My Digital Playground" />
                <p className="mt-5 text-lg">I like building fascinating, high-performance web-applications.</p>
                <p className="text-lg">Let's create something cool together!</p>
                <div className="mt-7 flex flex-col md:flex-row gap-2 ">
                    <Link to="/about" className="flex">
                        <Button className="grow">
                            View About Me
                        </Button>
                    </Link>
                    <Link to="/contact"  className="flex">
                        <Button variant="outline" className="grow">
                            Get In Touch
                        </Button>
                    </Link>
                </div>
            </div>
            <ImageSection width={isMobile ? 250 : 380} height={isMobile ? 290 : 440} img={img_url} />
        </div>
    );
}