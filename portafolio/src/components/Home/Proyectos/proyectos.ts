import Radio100 from "../../../assets/proyectos/radio100.jpeg";
import Peptipedia from "../../../assets/proyectos/peptipedia.jpg"

export interface IProyecto {
  title: string;
  description: string;
  image: string;
  link?: string;
  puesto: string;
  tecnologias: string;
  repositorio?: string;
}

export const proyectos: IProyecto[] = [
  {
    title: "Radio100.cl",
    description:
      "Desarrollo de una página web para Radio100, la cual tenía como finalidad poder escuchar la radio en tiempo real, así como la publicación de afiches publicitarios.",
    image: Radio100,
    link: "https://radio100.cl/",
    puesto: "Desarrollador Web (Full Stack)",
    tecnologias: "Node.js - React - MongoDB - Bootstrap",
    repositorio: "https://github.com/ClaudioGuevaraDev/Radio100.cl",
  },
  {
    title: "Peptipedia",
    description:
      "Desarrollo de una página web que consistía en un conjunto de herramientas para el apoyo de la investigación de la bioinformática y la ingeniería de proteínas. ",
    image: Peptipedia,
    link: "https://peptipedia.cl/",
    puesto: "Desarrollador Web (Frontend)",
    tecnologias: "React - Vite - Material UI",
  },
];
