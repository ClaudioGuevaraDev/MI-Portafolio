import HTMLLogo from "../../../assets/languages/html.png";
import CSSLogo from "../../../assets/languages/css.png";
import JavaScriptLogo from "../../../assets/languages/javascript.png";
import TypeScriptLogo from "../../../assets/languages/typescript.png";
import PythonLogo from "../../../assets/languages/python.png";
import SQLLogo from "../../../assets/languages/sql.png";

export interface language {
  title: string;
  url: string;
  image: any;
}

export const languages: language[] = [
  {
    title: "HTML5",
    url: "https://es.wikipedia.org/wiki/HTML5",
    image: HTMLLogo,
  },
  {
    title: "CSS3",
    url: "https://es.wikipedia.org/wiki/CSS",
    image: CSSLogo,
  },
  {
    title: "JavaScript",
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    image: JavaScriptLogo,
  },
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
    image: TypeScriptLogo,
  },
  {
    title: "Python",
    url: "https://www.python.org/",
    image: PythonLogo,
  },
  {
    title: "SQL",
    url: "https://es.wikipedia.org/wiki/SQL",
    image: SQLLogo,
  },
];
