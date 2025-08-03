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
import { Link } from "react-router-dom";

export const AppDrawer = () => {
  return (
    <Drawer
      variant="soft"
      size="sm"
      open={true}
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
          height={"10%"}
          bgcolor={"#121212"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography level="body-lg" sx={{ color: "#ffffff" }}>
            Menu Navegacao
          </Typography>
        </Box>
        <Box
          id="drawer-body"
          flex={1}
          display={"flex"}
          flexDirection={"column"}
        >
          <List variant="soft" size="md">
            <ListItem>
              <ListItemButton
                component={Link}
                to="/"
                selected={location.pathname === "/"}
              >
                <ListItemDecorator>
                  <HomeIcon />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to="/Sobre"
                selected={location.pathname === "/Sobre"}
              >
                <ListItemDecorator>
                  <PersonIcon />
                </ListItemDecorator>
                Paulo Carvalho
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to="/funcao"
                selected={location.pathname === "/funcao"}
              >
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
            href="mailto:paulo@email.com"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="https://wa.me/55XXXXXXXXXXX"
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
            href="https://linkedin.com/in/paulocarvalho"
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
            href="https://instagram.com/paulo_carvalho"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
};
