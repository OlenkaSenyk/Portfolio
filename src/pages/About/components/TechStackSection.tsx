import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import type { TechStackProps } from "@/pages/About/types.ts";
import { iconDictionary } from "@/dictionaries/iconDictionary.ts";

const myTechStack: TechStackProps[] = [
    {
        category: "Languages",
        skills: [ "JavaScript", "TypeScript", "C#", "SQL" ],
    },
    {
        category: "Frontend",
        skills: [ "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS" ],
    },
    {
        category: "Backend & DB",
        skills: [ "NestJS", "Node.js", "GraphQL", "TypeORM", "PostgreSQL", ".NET", "Entity Framework" ],
    },
    {
        category: "Tools & API",
        skills: [ "Git", "Postman", "Swagger" ],
    },
];

export default function TechStackSection() {
    return (
        <div className="flex flex-wrap gap-6">
            {myTechStack.map((item) => (
                <Card key={item.category} className="transition-all duration-300 hover:-translate-y-1 grow bg-background/30 backdrop-blur-3xl shadow-2xl ring-background/20">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center flex-wrap gap-6 2xl:gap-12 w-full">
                        {item.skills.map((skill) => {
                            const Icon = iconDictionary[skill];
                            return (
                                <div key={skill} className="flex gap-2 flex-col justify-center items-center">
                                    <Icon width={32} height={32}/>
                                    <p className="text-base">{skill}</p>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}