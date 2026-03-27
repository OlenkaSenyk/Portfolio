import type { ProjectCardProps } from "@/components/ProjectCard/types.ts";
import ReactIcon from "@/icons/ReactIcon.tsx";
import TypeScriptIcon from "@/icons/TypeScriptIcon.tsx";
import CSharpIcon from "@/icons/CSharpIcon.tsx";
import SQLiteIcon from "@/icons/SQLiteIcon.tsx";
import NodeJSIcon from "@/icons/NodeJSIcon.tsx";
import TelegrafJSIcon from "@/icons/TelegrafJSIcon.tsx";
import MongoDBIcon from "@/icons/MongoDBIcon.tsx";

export const img_url = "https://media.licdn.com/dms/image/v2/D4D03AQEZ2aadQaj05g/profile-displayphoto-crop_800_800/B4DZwLRPGAKQAI-/0/1769715594329?e=1775692800&v=beta&t=FGTTRGcNPzfF6F61V1E--231JAbkYr2A3UnVnM4AhYA"

export const projects: ProjectCardProps[] = [
    {
        id: "PriceTracker",
        title: "Price Tracker",
        badge: "IN_PROGRESS",
        description: "A real-time price monitoring dashboard",
        tools: [ReactIcon, TypeScriptIcon, CSharpIcon, SQLiteIcon],
        repoLink: "https://github.com/OlenkaSenyk/PriceTracker",
    },
    {
        id: "SiriusBot",
        img: "/projects/sirius_bot.PNG",
        title: "Sirius Bot",
        badge: "ARCHIVED",
        description: "Telegram bot for adopting or donating pets",
        tools: [NodeJSIcon, TelegrafJSIcon, MongoDBIcon],
        repoLink: "https://github.com/OlenkaSenyk/SiriusBot",
    }
]