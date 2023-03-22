import { ReactNode } from 'react';

interface SkillsProps{
    comingSoon:Project,
    current:Project,
}


type Project = string[];

export const skills : SkillsProps = {
    comingSoon:
    [
        "Node",
        "Desenvolvimento de jogos",
        "C#",
        "MongoDB",
        "Unity",
    ],
    current:
    [ 
        "Front End",
        "Landing page",
        "UX / UI Design",
        "Sistemas web",
        "Tema Wordpress",
        "React Native",
        "Modelagem UML",
        "Integração com APIs externa",
        "Wordpress API",
        "SQL - MYSQL",
        "Sass - Styled Components - Tailwind ", 
   ]
}


