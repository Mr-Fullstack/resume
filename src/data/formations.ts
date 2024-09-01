

export interface Formation {
	area: string;
	title: string;
	institution: string;
	dateStart: Date;
	dateFinish: Date;
}

export interface Courses {
	name: string;
	status: "concluded" | "in-progress";
	hour: number;
}

export const formations: Formation[] = [
	{
		area:'Tecnologia',
		title:'Jogos Digitais',
		dateStart:new Date("August 16, 2024 14:30:00"),
		dateFinish:new Date("January 24, 2027 21:00:00"),
		institution:"Wyden"
	},
	{
		area:'Formação Backend',
		title:'Java Web FullStack e Spring Boot REST API',
		dateStart:new Date("January 04, 2024 14:30:00"),
		dateFinish:new Date("December 20, 2025 21:00:00"),
		institution:"JDev Treinamento"
	},
	{
		area:'Formação Backend',
		title:'Backend com foco em Node JS',
		dateStart:new Date("July 07, 2023 14:30:00"),
		dateFinish:new Date("November 24, 2023 21:00:00"),
		institution:"Cubos Academy"
	},
	{
		area:'Tecnologia',
		title:'Análise e desenvolvimento de sistemas',
		dateStart:new Date("January 04, 2016 19:30:00"),
		dateFinish:new Date("March 19, 2019 19:00:00"),
		institution:"UNOPAR"
	}
]

export const courses: Courses[] = [
	{
		name: "Android kotlin e Java",
		hour: 40,
		status: 'in-progress',
	},
	{
		name: "MongoDB",
		hour: 20,
		status: 'concluded',
	},
	{
		name: "C# Fundamentos",
		hour: 40,
		status: 'concluded',
	},
	{
		name: "C# Avançado",
		hour: 60,
		status: 'concluded',
	},
	{
		name: "Typescript",
		hour: 11,
		status: 'concluded'
	},
	{
		name: "Unity",
		hour: 84,
		status: 'in-progress'
	},
	{
		name: "React Native",
		hour: 65,
		status: 'concluded'
	},
	{
		name: "UX Design Heurísticas",
		hour: 8,
		status: 'concluded'
	},
	{
		name: "Tipografia Avançada",
		hour: 12,
		status: 'concluded'
	},
	{
		name: "UI Design Avançado",
		hour: 15,
		status: 'concluded'
	},
	{
		name: "Redux",
		hour: 8,
		status: 'concluded'
	},
	{
		name: "UI Design Iniciantes",
		hour: 17,
		status: 'concluded'
	},
	{
		name: "React Completo",
		hour: 36,
		status: 'concluded'
	},
	{
		name: "Análise Orientada a Objetos",
		hour: 8,
		status: 'concluded'
	},
	{
		name: "CSS avançado e Sass: Flexbox, Grid, Animação",
		hour: 24,
		status: 'concluded'
	},
	{
		name: "Web Design Completo",
		hour: 44,
		status: 'concluded'
	},
	{
		name: "WordPress REST API",
		hour: 4,
		status: 'concluded'
	},
	{
		name: "JavaScript Completo ES6",
		hour: 76,
		status: 'concluded'
	}
]

