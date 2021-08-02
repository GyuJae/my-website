import { createContext, useContext } from "react";

interface ICategory {
  src: string;
  name: string;
}

const MyCategories: ICategory[] = [
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/js.png",
    name: "js",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/python_l9Src2C.png",
    name: "python",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png",
    name: "html",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png",
    name: "css",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/nodeJSBadge.png",
    name: "nodeJs",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/react_nsNvyE0.png",
    name: "react",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/graphqlBadge.png",
    name: "graphql",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript.png",
    name: "typescript",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/goBadge.png",
    name: "golang",
  },
  {
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/nestjs.png",
    name: "nestJs",
  },
];

const CategoryContext = createContext<ICategory[]>(MyCategories);

export const useCategories = () => useContext(CategoryContext);
