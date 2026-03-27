import type { FC, SVGProps } from "react";
import CSharpIcon from "@/icons/CSharpIcon.tsx";
import JavaScriptIcon from "@/icons/JavaScriptIcon.tsx";
import TypeScriptIcon from "@/icons/TypeScriptIcon.tsx";
import SQLIcon from "@/icons/SQLIcon.tsx";
import ReactIcon from "@/icons/ReactIcon.tsx";
import NextJSIcon from "@/icons/NextJSIcon.tsx";
import HtmlIcon from "@/icons/HtmlIcon.tsx";
import CssIcon from "@/icons/CssIcon.tsx";
import TailwindCSSIcon from "@/icons/TailwindCSSIcon.tsx";
import NestJSIcon from "@/icons/NestJSIcon.tsx";
import NodeJSIcon from "@/icons/NodeJSIcon.tsx";
import GraphQLIcon from "@/icons/GraphQLIcon.tsx";
import TypeOrmIcon from "@/icons/TypeOrmIcon.tsx";
import PostgreSQLIcon from "@/icons/PostgreSQLIcon.tsx";
import DotNetIcon from "@/icons/DotNetIcon.tsx";
import EntityFrameworkIcon from "@/icons/EntityFrameworkIcon.tsx";
import GitHubIcon from "@/icons/GitHubIcon.tsx";
import PostmanIcon from "@/icons/PostmanIcon.tsx";
import SwaggerIcon from "@/icons/SwaggerIcon.tsx";

export const iconDictionary: Record<string, FC<SVGProps<SVGSVGElement>>> = {
    "C#": CSharpIcon,
    "CSS3": CssIcon,
    "JavaScript": JavaScriptIcon,
    "TypeScript": TypeScriptIcon,
    "SQL": SQLIcon,
    "React.js": ReactIcon,
    "Next.js": NextJSIcon,
    "HTML5": HtmlIcon,
    "Tailwind CSS": TailwindCSSIcon,
    "NestJS": NestJSIcon,
    "Node.js": NodeJSIcon,
    "GraphQL": GraphQLIcon,
    "TypeORM": TypeOrmIcon,
    "PostgreSQL": PostgreSQLIcon,
    ".NET": DotNetIcon,
    "Entity Framework": EntityFrameworkIcon,
    "Git": GitHubIcon,
    "Postman": PostmanIcon,
    "Swagger": SwaggerIcon,
}
