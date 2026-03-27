import TypographyH3 from "@/components/Typography/TypographyH3.tsx";
import ImageSection from "@/components/ImageSection";
import { img_url } from "@/pages/Home/constants.ts";
import { softSkills } from "../constants.ts";

export default function AboutMeSection() {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center gap-5 md:gap-10 items-center">
            <div className="md:w-1/2">
                <p>
                    My name is Olena Senyk. I'm a Software Engineer and I enjoy building modern web
                    apps from beginning to end. I like creating useful, clean, and beautiful applications,
                    and improving my skills.
                </p>
                <TypographyH3 text="Soft Skills" className="text-left mt-5 mb-3" />
                <ul className="list-disc ml-5">
                    {softSkills.map((skill) => (
                        <li className="py-1" key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
            <ImageSection width={250} height={300} img={img_url} />
        </div>
    );
}