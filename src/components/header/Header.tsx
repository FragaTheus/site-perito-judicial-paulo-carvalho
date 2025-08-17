import { Box, IconButton, Sheet } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Logo } from "../logo/Logo";
import { useDrawerContext } from "../../contexts/DrawerContext";
import EmailIcon from "@mui/icons-material/Email";
import { useResContext } from "../../contexts/ResponsiveContext";

export const Header = () => {
  const { toogleDrawer } = useDrawerContext();
  const { isMobile } = useResContext();
  return (
    <Sheet
      id="header"
      variant="solid"
      color="primary"
      sx={
        isMobile
          ? {
              height: "10vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              bgcolor: "primary.800",
              position: "fixed",
              zIndex: 1000,
            }
          : {
              height: "10vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              bgcolor: "primary.800",
              position: "fixed",
              zIndex: 1000,
            }
      }
    >
      <Box
        id="toolbar-header"
        width={"90%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box id="menu-button">
          <IconButton
            onClick={() => toogleDrawer()}
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <MenuIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
        </Box>
        <Box
          id="header-main"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
          width={"60%"}
          height={"100%"}
          gap={"10px"}
        >
          <div id="header" />
          <Logo />
        </Box>
        <Box id="social-media" display={"flex"} gap={"4px"}>
          <IconButton
            component="a"
            href="https://www.instagram.com/paulodecarvalho.pereira?igsh=YW44Z2ZqaHB4cGxt"
            target="_blank"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <InstagramIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto: perito.paulo@bol.com.br"
            target="_blank"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <EmailIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
        </Box>
      </Box>
    </Sheet>
  );
};
