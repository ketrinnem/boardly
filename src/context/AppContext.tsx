import React, { useState } from "react";
import { mockTodos } from "../constants/mock";

export interface Item {
  id: number;
  title: string;
  description: string;
  priority: string;
  column: string; // "todo" | "in-progress" | "in-review" | "done";
  type?: string; // "feature" | "bug";
  origin?: string; // "frontend" | "backend" | "design" | "devops" | "db";
}

interface IAppContext {
  items: Item[];
  setItems: (items: Item[]) => void;
  searchText: string;
  setSearchText: (a: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (a: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({
  items: mockTodos,
  setItems: () => {},
  searchText: "",
  setSearchText: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

export const useAppContext = (): IAppContext => {
  const [items, setItems] = useState<Item[]>(mockTodos);
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return { items, setItems, searchText, setSearchText, isLoggedIn, setIsLoggedIn };
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const data = useAppContext();
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppProvider;
