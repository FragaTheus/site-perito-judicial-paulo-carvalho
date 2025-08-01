import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
  isOpen: boolean;
  toogleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerContext);

interface IDrawerContextProvider {
  children: React.ReactNode;
}

export const DrawerContextProvider: React.FC<IDrawerContextProvider> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toogleDrawer = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <DrawerContext value={{ isOpen, toogleDrawer }}>{children}</DrawerContext>
  );
};

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
