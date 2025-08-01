import { Box } from "@mui/joy";
import { Header } from "../../components/header/Header";
import { AppDrawer } from "../../components/drawer/Drawer";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Box width={"100%"}>
      <Header />
      <AppDrawer />
      <Box id="page-layout">{children}</Box>
    </Box>
  );
};
