import { Box, Button, Typography } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useWppContext } from "../../contexts/WhatsAppContext";
import type React from "react";

interface IHeroProsp {
  title: string;
  imgUrl: string;
  subtitle?: string;
  description?: string;
}

export const HeroSection: React.FC<IHeroProsp> = ({
  title,
  imgUrl,
  subtitle,
  description,
}) => {
  const { enviarMsg } = useWppContext();
  return (
    <>
      <Box
        id="img-hero"
        component={"img"}
        src={imgUrl}
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
          {title}
        </Typography>
        <Typography textAlign={"left"} level="h2">
          {subtitle}
        </Typography>
        <Typography textAlign={"left"} level="h3">
          {description}
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
