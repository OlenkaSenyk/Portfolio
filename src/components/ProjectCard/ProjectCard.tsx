import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { projectStatusDictionary } from "@/dictionaries/projectStatusDictionary.ts";
import type { ProjectCardProps } from "./types.ts";
import EmptyImg from "@/components/EmptyImg";

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Card className="pt-0 mx-5 h-full max-h-120 max-w-100 backdrop-blur-3xl hover:shadow-2xl hover:duration-300 gap-0 bg-background/5 ring-background/50 shadow-xl">
            {
                project.img ?
                    <img className="m-4 rounded-md w-auto object-contain mx-auto h-50" alt="project" src={project.img} /> :
                    <EmptyImg />
            }
            <CardHeader className="px-4 grow">
                <div className="flex justify-between items-center">
                    <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
                    <Badge variant={projectStatusDictionary[project.badge].variant}>
                        {projectStatusDictionary[project.badge].label}
                    </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-2 my-4">
                    {project.tools.map((Tool, index) => (
                        <Tool key={index} width={36} height={36} />
                    ))}
                </div>
            </CardHeader>
            <CardFooter className="flex px-4 mt-2 gap-2">
                <a href={project.repoLink} className="grow w-full" target="_blank">
                    <Button className="bg-primary/50 w-full p-0">
                        Repo
                    </Button>
                </a>
                <a href={project.demoLink} className="grow w-full" target="_blank">
                    <Button className="bg-primary/50 w-full p-0" disabled={!project.demoLink}>
                        Demo
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}