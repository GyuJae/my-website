import { createContext } from "react";
import { useContext } from "react";

interface IProject {
  name: string;
  url: string;
  thumnail: string;
  skills: string[];
  githubUrl: string;
}

const MyProjects: IProject[] = [
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
  {
    name: "Netfilx",
    url: "https://reverent-poincare-b85924.netlify.app",
    thumnail:
      "https://d33wubrfki0l68.cloudfront.net/61079f4c5e6bfe0008267ca7/screenshot_2021-08-02-07-32-26-0000.png",
    skills: ["react", "js"],
    githubUrl: "https://github.com/GyuJae/Netfilx-cloning",
  },
];

const ProjectContext = createContext<IProject[]>(MyProjects);

export const useProjects = () => useContext(ProjectContext);
