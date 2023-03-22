
export interface Formation
{
    name:string;
    status:'concluded' |'in-progress';
    hour:number;
}

export const formations : Formation[] = [
    {
        name:"MongoDB",
        hour:20,
        status:'in-progress'
    },
    {
        name:"C# Fundamentos",
        hour:40,
        status:'in-progress'
    },
    {
        name:"C# Avançado",
        hour:60,
        status:'in-progress'
    },
    ,
    {
        name:"Typescript",
        hour:11,
        status:'in-progress'
    },
    {
        name:"Unity",
        hour:84,
        status:'in-progress'
    },
    {
        name:"React Native",
        hour:65,
        status:'in-progress'
    },
    {
        name:"UX Design Heurísticas",
        hour:8,
        status:'in-progress'
    },
    {
        name:"Tipografia Avançada",
        hour:12,
        status:'in-progress'
    },
    {
        name:"UI Design Avançado",
        hour:15,
        status:'in-progress'
    },
    {
        name:"Redux",
        hour:8,
        status:'concluded'
    },
    {
        name:"UI Design Iniciantes",
        hour:17,
        status:'concluded'
    },
    {
        name:"React Completo",
        hour:36,
        status:'concluded' 
    },
    {
        name:"Análise Orientada a Objetos",
        hour:8,
        status:'concluded'
    },
    {
        name:"CSS avançado e Sass: Flexbox, Grid, Animação",
        hour:24,
        status:'concluded'
    },
    {
        name:"Web Design Completo",
        hour:44,
        status:'concluded'
    },
    {
        name:"WordPress REST API",
        hour:4,
        status:'concluded'
    },
    {
        name:"JavaScript Completo ES6",
        hour:76,
        status:'concluded'
    }
]



