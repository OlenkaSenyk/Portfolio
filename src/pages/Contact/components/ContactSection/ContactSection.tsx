import ContactItem from "./ContactItem.tsx";
import { Button } from "@/components/ui/button.tsx";
import SocialMediaItem from "./SocialMediaItem.tsx";
import { contactInfo, socialMediaInfo } from "./constants.ts";

export default function ContactSection() {
    return (
        <div className="flex flex-col md:flex-row items-center mx-auto gap-7">
            <div className="flex flex-col gap-5 md:border-r border-foreground/10 0 pr-10">
                {contactInfo.map((item) => (
                    <ContactItem title={item.title} icon={item.icon} description={item.description} key={item.title} />
                ))}
            </div>
            <div className="hidden md:flex flex-col gap-5 items-start">
                {socialMediaInfo.map((item) => (
                    <SocialMediaItem title={item.title} icon={item.icon} link={item.link} key={item.title} />
                ))}
                <a href="/OlenaSenykCV.pdf" download>
                    <Button variant="outline">Download CV</Button>
                </a>
            </div>
            <a href="/OlenaSenykCV.pdf" download className="w-full md:hidden">
                <Button variant="outline" className="w-full">Download CV</Button>
            </a>
        </div>
    )
}