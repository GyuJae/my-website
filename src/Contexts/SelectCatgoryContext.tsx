import { createContext, useState } from "react";

interface ISelectContext {
  currentCategory: string;
  setCurrentCategory: Function | null;
}

export const SelectCategoryContext = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const context = createContext<ISelectContext>({
    currentCategory,
    setCurrentCategory,
  });

  return context;
};
