import { Box, IconButton, Sheet, useTheme } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useWppContext } from "../contexts/WhatsAppContext";
import { Logo } from "./Logo";
import { useMediaQuery } from "@mui/material";

export const Header = () => {
  const { enviarMsg } = useWppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        width={isMobile ? "90%" : "95%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          id="header-main"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
          height={"100%"}
          gap={"10px"}
        >
          <Logo />
        </Box>
        <Box display={"flex"} gap={"10px"}>
          <IconButton
            id="email-contact-btn"
            component="a"
            href="mailto: perito.paulo@bol.com.br"
            target="_blank"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <EmailIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
          <IconButton
            id="whatsapp-button"
            type="submit"
            onClick={() => enviarMsg()}
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <WhatsAppIcon sx={{ color: "#25D366", fontSize: "md" }} />
          </IconButton>
        </Box>
      </Box>
    </Sheet>
  );
};

{
  /*
  Em breve

  <Box id="menu-button">
          <IconButton
            onClick={() => toogleDrawer()}
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <MenuIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
        </Box>*/
}
