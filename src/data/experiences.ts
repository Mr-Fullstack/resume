export interface ExperiencesProps{
    [key:number] : ExperienceProps[];
}
export  interface ExperienceProps{
    company:string;
    job_role:string;
    descritption:string;
    stack:string[]
}

export const experienciesData : ExperiencesProps = {
    2020:[
        {
            company:"Reis da Bola",
            job_role:"Desenvolvedor Front End - Júnior",
            descritption:"Codificação, estilização e implementação de interfaces com ReactJS a partir de modelos PSDs.",
            stack:["Javascript","SASS","GIT","Photoshop","ReactJS"]
        },
        {
            company:"Level 123",
            job_role:"Desenvolvedor Web - Júnior",
            descritption:"Desenvolvimento de sites com Wordpress - codificação de layout HTML com PHP7, CSS3 e javascript a partir de design em adobeXD.",
            stack:["Javascript","PHP7","Wordpress","CSS3","GITLAB","AdobeXD"]
        }
    ],
    2022:[
        {
            company:"Golias Fantasy",
            job_role:"Desenvolvedor Front End e UX/UI - Júnior",
            descritption:"Criação de interfaces utilizando Figma, Codificação, estilização e implementação das interfaces com ReactJS a partir de modelos no Figma e criação e manutenção de aplicativo android em React Native.",
            stack:["Javascript","SASS","SVN","Figma","ReactJS","React Native"]
        }
    ],
    2023:[
        {
            company:"Desenvolvedor Freelancer",
            job_role:"Analista de Sistemas e Desenvolvedor Full Stack",
            descritption:"Criação, análise, codificação, implementação e deploy de sistemas web, aplicativos mobile e jogos, utilizado as melhores tecnologias do mercado.",
            stack:["TypeScript","SASS","GIT","Figma","ReactJS","React Native","C#","SQL", "FIREBASE","MongoDB","Unity"]
        }
    ],
}