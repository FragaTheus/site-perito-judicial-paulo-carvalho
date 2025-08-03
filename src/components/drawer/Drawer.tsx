import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  Tooltip,
  Typography,
} from "@mui/joy";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GavelIcon from "@mui/icons-material/Gavel";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { useWppContext } from "../../contexts/WhatsAppContext";
import { useDrawerContext } from "../../contexts/DrawerContext";
import { useResContext } from "../../contexts/ResponsiveContext";

export const AppDrawer = () => {
  const { enviarMsg } = useWppContext();
  const { isOpen, toogleDrawer } = useDrawerContext();
  const { isMobile } = useResContext();
  const navigate = useNavigate();

  const handleNavigate = (rota: string) => {
    navigate(rota);
    toogleDrawer();
  };

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "left"}
      variant="soft"
      size="sm"
      open={isOpen}
      onClose={() => toogleDrawer()}
      sx={{ color: "background.surface" }}
    >
      <Box
        id="drawer-box-global"
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          id="drawer-header"
          width={"100%"}
          height={"8%"}
          bgcolor={"#121212"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          padding={"20px"}
        >
          <Typography level="body-lg" sx={{ color: "#ffffff" }}>
            Menu de Navegação
          </Typography>
        </Box>
        <Box
          id="drawer-body"
          flex={1}
          display={"flex"}
          flexDirection={"column"}
        >
          <List variant="plain" size="lg">
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("/")}>
                <ListItemDecorator>
                  <HomeIcon />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("/Sobre")}>
                <ListItemDecorator>
                  <PersonIcon />
                </ListItemDecorator>
                Paulo Carvalho
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("/Funcao")}>
                <ListItemDecorator>
                  <GavelIcon />
                </ListItemDecorator>
                Perito Judicial
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          p: 1.5,
          borderTop: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-evenly",
          bgcolor: "background.surface",
        }}
      >
        <Tooltip title="E-mail">
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="mailto: perito.paulo@bol.com.br"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <IconButton
            variant="plain"
            color="neutral"
            onClick={() => enviarMsg()}
            target="_blank"
          >
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="https://www.linkedin.com/in/paulo-carvalho-pereira-2507a22ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="https://www.instagram.com/paulodecarvalho.pereira?igsh=YW44Z2ZqaHB4cGxt"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
};
