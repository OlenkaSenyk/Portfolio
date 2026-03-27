import type { ContactItemProps } from "./types.ts";
import { Mail, MapPin, Phone } from "lucide-react";
import GitHubIcon from "@/icons/GitHubIcon.tsx";
import LinkedInIcon from "@/icons/LinkedInIcon.tsx";

export const contactInfo: ContactItemProps[] = [
    {
        title: "Email",
        description: "olena.senyk16@gmail.com",
        icon: Mail
    },
    {
        title: "Phone",
        description: "+48 730 673 680",
        icon: Phone
    },
    {
        title: "Location",
        description: "Krakow, Poland",
        icon: MapPin
    }
]

export const socialMediaInfo: ContactItemProps[] = [
    {
        title: "GitHub",
        icon: GitHubIcon,
        link: "https://github.com/OlenkaSenyk"
    },
    {
        title: "LinkedIn",
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/olena-senyk-806796353/"
    }
]