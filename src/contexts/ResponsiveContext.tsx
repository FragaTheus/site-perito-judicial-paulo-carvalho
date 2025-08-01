import { useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";

interface IResponsiveContext {
  isMobile: boolean;
}

const ResponsiveContext = createContext({} as IResponsiveContext);

interface IResponsiveProvider {
  children: React.ReactNode;
}

export const ResponsiveProvider: React.FC<IResponsiveProvider> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResContext = () => {
  return useContext(ResponsiveContext);
};
