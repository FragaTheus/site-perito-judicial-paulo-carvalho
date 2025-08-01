import { Box, Button, Typography } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useWppContext } from "../../contexts/WhatsAppContext";

export const HeroContent = () => {
  const { enviarMsg } = useWppContext();
  return (
    <>
      <Box
        id="img-hero"
        component={"img"}
        src="hero-final.jpg"
        width={"100%"}
        height={"90svh"}
        sx={{ position: "relative", objectFit: "cover" }}
      />
      <Box
        id="content-hero"
        flex={1}
        padding={"10px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        position={"absolute"}
        zIndex={1}
      >
        <Typography textAlign={"left"} level="h1">
          Paulo Carvalho
        </Typography>
        <Typography textAlign={"left"} level="h2">
          Engenheiro de segurança do trabalho | Perito judicial
        </Typography>
        <Typography textAlign={"left"} level="h3">
          Perícias judiciais e assistências técnicas em ações trabalhistas.
        </Typography>
        <Button
          onClick={() => enviarMsg()}
          variant="outlined"
          color="primary"
          sx={{ marginTop: "40px", gap: "5px" }}
        >
          <WhatsAppIcon sx={{ fontSize: "clamp(1rem,2vw,3rem)" }} />
          <Typography level="h4">Entre em contato</Typography>
        </Button>
      </Box>
    </>
  );
};
