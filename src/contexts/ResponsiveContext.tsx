import { useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";

interface IResponsiveContext {
  isMobile: boolean;
  isTablet: boolean;
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
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResContext = () => {
  return useContext(ResponsiveContext);
};
