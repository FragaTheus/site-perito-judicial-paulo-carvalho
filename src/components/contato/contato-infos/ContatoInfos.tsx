import { Box, IconButton, Typography } from "@mui/joy";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export const ContatoInfos = () => {
  return (
    <Box
      id="footer-info"
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography level="body-md" textAlign="center" sx={{ color: "#888888" }}>
        Paulo de Carvalho Pereira
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={0.5}>
        <Box display="flex" alignItems="center" gap={"4px"}>
          <LocalPhoneIcon sx={{ fontSize: "body-md" }} />
          <Typography level="body-md" sx={{ color: "#888888" }}>
            11 97224-8445
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon sx={{ fontSize: "body-md" }} />
          <Typography
            level="body-md"
            textAlign={"center"}
            sx={{ color: "#888888" }}
          >
            perito.paulo@bol.com.br
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon sx={{ fontSize: "body-md" }} />
          <Typography
            level="body-md"
            textAlign={"center"}
            sx={{ color: "#888888" }}
          >
            perito.paulocarvalho@gmail.com
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            level="body-md"
            textAlign={"center"}
            sx={{ color: "#888888" }}
          >
            Av. Dr. Odilon de Souza, 170 – Jd. Imperador, Suzano – SP
          </Typography>
        </Box>
      </Box>

      <Box mt={1} display="flex" gap={1}>
        <IconButton
          variant="plain"
          component="a"
          href="https://www.linkedin.com/in/paulo-carvalho-pereira-2507a22ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: "md" }} />
        </IconButton>
        <IconButton
          variant="plain"
          component="a"
          href="https://www.instagram.com/paulodecarvalho.pereira?igsh=YW44Z2ZqaHB4cGxt"
          target="_blank"
        >
          <InstagramIcon sx={{ fontSize: "md" }} />
        </IconButton>
      </Box>

      <Typography
        level="body-md"
        textAlign="center"
        mt={1}
        sx={{ color: "#888888" }}
      >
        © {new Date().getFullYear()} Paulo de Carvalho. Todos os direitos
        reservados.
      </Typography>
    </Box>
  );
};
