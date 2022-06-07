import Happy from "../../../assets/qualities/happy.svg";
import Sociable from "../../../assets/qualities/remote-team.svg"
import Worker from "../../../assets/qualities/javascript-coding-language.svg"
import Improve from "../../../assets/qualities/success.svg"

export interface quality {
    title: string
    description: string
    image: string
}

export const qualities: quality[] = [
    {
        title: "Alegre",
        description: "Soy una persona positiva, respetuosa y que siempre trata de establecer una buena con los demás.",
        image: Happy
    },
    {
        title: "Equipo",
        description: "Busco siempre establecer una buena relación con mis compañeros y generar un buen ambiente de trabajo.",
        image: Sociable
    },
    {
        title: "Trabajador",
        description: "Me gusta trabajar y cumplir con mis responsabilidades, siempre buscando ayudar al equipo.",
        image: Worker
    },
    {
        title: "Perseverante",
        description: "Siempre busco mejorar y aprender nuevas cosas. Si bien tengo mis preferencias, no me cierro nuevos lenguajes o frameworks.",
        image: Improve
    }
]