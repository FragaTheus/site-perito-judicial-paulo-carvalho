import { Box } from "@mui/joy";
import { Header } from "../../components/header/Header";
import { AppDrawer } from "../../components/drawer/Drawer";
import { Footer } from "../../components/footer/Footer";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Box width={"100%"} bgcolor={"background.body"}>
      <Box sx={{ height: "10vh" }}>
        <Header />
      </Box>
      <AppDrawer />
      <Box id="page-layout">{children}</Box>
      <Footer />
    </Box>
  );
};
