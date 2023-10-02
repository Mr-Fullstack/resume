import { ReactNode } from 'react';

interface SkillsProps{
    comingSoon:Project,
    current:Project,
}

type Project = string[];

export const skills : SkillsProps = {
    comingSoon:
    [
        "Desenvolvimento de jogos",
        "C#",
        "MongoDB",
        "Unity",
        "Nest JS",
        "Vue JS",
        "Svelte",
        "Java",
        "Kotlin"
    ],
    current:
    [ 
        "Front End",
        "Node - Express",
        "Landing page",
        "UX / UI Design",
        "Sistemas web",
        "Tema Wordpress",
        "React Native",
        "Modelagem UML",
        "Integração com APIs externa",
        "Wordpress API",
        "Firebase",
        "Supabase",
        "Knex - Prisma ORM",
        "React JS - Next JS - Vite JS",
        "SQL - MYSQL - POSTGRESQL",
        "CSS - Sass - Styled Components - Tailwind - StoryBook",
   ]
}

