import { ReactNode } from 'react';

export  interface Project{
    name:string
    description:string[]
    stack:string[]
    url:string
    concluded:boolean
}

export const projects : Project[] = [
    {
        name:"Purple Games",
        concluded:false,
        description:[
            "Uma plataforma de jogos multiplayer e singleplayer, gratuitos para jogar e  se divertir sozinho ou com amigos.",
            "É um projeto pessoal, que tem intuinto de me desafiar e distribuir meus próprios jogos ao longo dos meus estudos sobre desenvolvimento de games",
            "funcionalidades como criação de sala e chat online, loja de itens, jogos pvp e pve faram parte do portifólio de jogos da plataforma"],
        stack:["Next JS", "StoryBook", "Supabase", "TailwindCSS", "Git", "Figma" ,"PostgreSQL", "Firebase"],
        url:"https://anyname-six.vercel.app/dashboard"
    },
    {
        name:"Cuteblog",
        concluded:false,
        description:[
            "Um blog simples e fofo com intuito de registrar meus momentos na área de tecnologia",
            "É um projeto pessoal de um blog com sistema de postagem, sistema de comentários e painel admin, que permite inscrição de novos usuários leitores, editores ou admin",
            ""],
        stack:["Next JS", "React JS", "TailwindCSS", "Git" , "Prisma","PostgreSQL", "Supabase"],
        url:"https://cuteblog-kappa.vercel.app/signin"
    },
    {
        name:"Inventory JS",
        concluded:true,
        description:[
            "Um inventário simples com intuito de fortalecer conhecimentos aprendidos com a leitura (ainda em andamento) do livro Clean Code bem como implementação do Observable Patterns bem e relembrar conceitos sobre manipulação de DOM e POO em Javascript puro ( sem auxílio de frameworks ou libs externas )", 
            "É um projeto pessoal de um simples inventário de itens baseado em jogos de estilo rpg e afins, com algums funcionalidades.",
            "Foram coletadas assets de imagens em 2d de um acervo gratuito disponivel no site craftpix.net"],
        stack:["Css3", "Clean Code", "Observable", "POO", "DOM", "Javascript", "Git", "craftpix.net"],
        url:"https://aesthetic-crostata-da7413.netlify.app/"
    },
    {
        name:"Memory Brain",
        concluded:true,
        description:
        [
        `Um jogo de memória online , baseado em temporadas, cada temporada tem suas respectivas artes e músicas, 
         no futuro os usuário terão a possibilidade  enviarem suas próprias temporadas.`,
        `É um projeto pessoal, praticamente eu fiz tudo tirando algumas artes, o layout e design da telas usando Figma,  
         fiz a codificação com Typescript e React para a lógica e Styled Components para estilização, o banco de dados foi construido em NoSQL 
         usando Firebase Storage e Database,a autenticação também foi feita no Firebase usando o Authentication, para controle de versão usei Git mais Github.`
        ],
        stack:["Firebase","NoSQL","Typescript","Figma","React", "Git","Github", "Styled Components"],
        url:"https://memory-brain.web.app/"
    },
    {
        name:"Golias Fantasy",
        concluded:true,
        description:[
            "Um Pwa é uma plataforma de aposta de futebol, assim como o antigo Reis da Bola como era é chamado, passou por uma grande repaginada, incluindo a mudança no nome", 
            "É um projeto profissional que tem como objetivo principal, fornece entretenimento para torcedores apaixonados pelo seu time, possibilitando o ganho de valores em dinheiro ao vencendor caso seu time seja o vencedor da rodada.",
            "Atuei como Front-End e UX/UI, criando interfaces no Figma e realizando as implementações no React com Sass e Javascript, bem como desenvolvimento de aplicativo android usando React Native com Push Notification do Firebase, tudo isso com Svn para controle de versão e CodePush para facilitar a atualização do bundle js sem passar pela loja"],
        stack:["Pwa", "Figma", "React", "Svn", "React Native", "Javascript", "Sass",  "Firebase", "CodePush","Push Notification"],
        url:"https://www.goliasfantasy.com/app/pt"
    },
    {
        name:"Time Focus",
        concluded:true,
        description:[
            "Um aplicativo mobile, baseado na técnica pomodoro, disponivel atualmente na loja android", 
            "É um projeto pessoal que tem como objetivo principal, fornece sitema de contagem regressiva de tempo com aviso sonoro, possibilitando usários focar em sua atividades."],
        stack:["Figma", "React Native","Javascript", "Git", "Styled Components",  "CodePush","Expo"],
        url:"https://play.google.com/store/apps/details?id=br.com.labscode.timefocus"
    }
];

