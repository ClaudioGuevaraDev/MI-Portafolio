import Node from "../../../assets/areas/node.svg";
import Express from "../../../assets/areas/express.png"
import FastAPI from "../../../assets/areas/fastapi.png"
import React from "../../../assets/areas/react.svg";
import MySQL from "../../../assets/areas/mysql-icon.svg";
import PostgreSQL from "../../../assets/areas/postgresql.svg";
import MongoDB from "../../../assets/areas/mongodb.svg"
import Electron from "../../../assets/areas/electron.svg";
import Tauri from "../../../assets/areas/tauri.svg"
import Bootstrap from "../../../assets/areas/bootstrap.svg";
import MaterialUI from "../../../assets/areas/material-ui.svg";
import Pandas from "../../../assets/areas/pandas.png"
import Numpy from "../../../assets/areas/numpy.svg"
import Matplotlib from "../../../assets/areas/matplotlib-icon.svg"
import ScikitLearn from "../../../assets/areas/scikit-learn.png"
import Playwright from "../../../assets/areas/playwright.svg";
import Linux from "../../../assets/areas/linux-tux.svg";
import Terminal from "../../../assets/areas/terminal.svg";
import Docker from "../../../assets/areas/docker-icon.svg";
import Anaconda from "../../../assets/areas/anaconda.png"
import Nginx from "../../../assets/areas/nginx.svg"

export interface Framework {
  title: string;
  image: string;
  url: string;
}

export interface Area {
  section: string;
  frameworks: Framework[];
}

export const areas: Area[] = [
  {
    section: "Desarrollo Backend",
    frameworks: [
      {
        title: "Node.js",
        image: Node,
        url: "https://nodejs.org/es/",
      },
      {
        title: "Express",
        image: Express,
        url: "https://expressjs.com/es/",
      },
      {
        title: "FastAPI",
        image: FastAPI,
        url: "https://fastapi.tiangolo.com/"
      }
    ],
  },
  {
    section: "Desarrollo Frontend",
    frameworks: [
      {
        title: "React",
        image: React,
        url: "https://es.reactjs.org/",
      },
      // {
      //   title: "Vue",
      //   image: Vue,
      //   url: "https://vuejs.org/",
      // },
    ],
  },
  {
    section: "Escritorio",
    frameworks: [
      {
        title: "Electron",
        image: Electron,
        url: "https://www.electronjs.org/",
      },
      {
        title: "Tauri",
        image: Tauri,
        url: "https://tauri.studio/"
      }
    ],
  },
  {
    section: "Móvil",
    frameworks: [
      {
        title: "React Native",
        image: React,
        url: "https://reactnative.dev/",
      },
    ],
  },
  {
    section: "Bases de Datos",
    frameworks: [
      {
        title: "MySQL",
        image: MySQL,
        url: "https://www.mysql.com/",
      },
      {
        title: "PostgreSQL",
        image: PostgreSQL,
        url: "https://www.postgresql.org/",
      },
      {
        title: "MongoDB",
        image: MongoDB,
        url: "https://www.mongodb.com/es"
      },
    ],
  },
  {
    section: "CSS Frameworks",
    frameworks: [
      {
        title: "Bootstrap",
        image: Bootstrap,
        url: "https://getbootstrap.com/",
      },
      {
        title: "Material UI",
        image: MaterialUI,
        url: "https://mui.com/",
      },
    ],
  },
  {
    section: "Ciencia de Datos",
    frameworks: [
      {
        title: "Pandas",
        image: Pandas,
        url: "https://pandas.pydata.org/"
      },
      {
        title: "Numpy",
        image: Numpy,
        url: "https://numpy.org/"
      },
      {
        title: "Matplotlib",
        image: Matplotlib,
        url: "https://matplotlib.org/"
      },
      {
        title: "Scikit Learn",
        image: ScikitLearn,
        url: "https://scikit-learn.org/stable/"
      }
    ]
  },
  {
    section: "Web Scraping",
    frameworks: [
      {
        title: "Playwright",
        image: Playwright,
        url: "https://playwright.dev/",
      },
    ],
  },
  {
    section: "Complementarios",
    frameworks: [
      {
        title: "Linux",
        image: Linux,
        url: "https://es.wikipedia.org/wiki/GNU/Linux",
      },
      {
        title: "Terminal",
        image: Terminal,
        url: "https://es.wikipedia.org/wiki/GNU/Linux",
      },
      {
        title: "Docker",
        image: Docker,
        url: "https://www.docker.com/",
      },
      {
        title: "Anaconda",
        image: Anaconda,
        url: "https://www.anaconda.com/"
      },
      {
        title: "Nginx",
        image: Nginx,
        url: "https://www.nginx.com/"
      }
    ],
  },
];
