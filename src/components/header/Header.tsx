import { Box, IconButton, Sheet } from "@mui/joy";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <Sheet
      id="header"
      variant="solid"
      color="primary"
      sx={{
        height: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bgcolor: "primary.800",
        position: "sticky",
      }}
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
            component="a"
            href="mailto: perito.paulo@bol.com.br"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <MailIcon sx={{ color: "inherit", fontSize: "md" }} />
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
            href="https://www.linkedin.com/in/paulo-carvalho-pereira-2507a22ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "lg", borderColor: "primary.900" }}
          >
            <LinkedInIcon sx={{ color: "inherit", fontSize: "md" }} />
          </IconButton>
        </Box>
      </Box>
    </Sheet>
  );
};
