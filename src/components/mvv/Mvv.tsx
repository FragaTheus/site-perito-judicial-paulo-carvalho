import { Box, Divider, Typography } from "@mui/joy";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BalanceIcon from "@mui/icons-material/Balance";
import { useResContext } from "../../contexts/ResponsiveContext";

export const MisaoVisaoValores = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"20px"}
      padding={"40px"}
      mt={"-20svh"}
      sx={isMobile ? { flexDirection: "column" } : {}}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={isMobile ? { width: "100%" } : { width: "30%" }}
      >
        <LightbulbIcon
          sx={{
            fontSize: "clamp(1.2rem,6vmin,6rem)",
            color: "primary.100",
          }}
        />
        <Typography level="title-md" sx={{ color: "primary.100" }}>
          Missão
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          Garantir ao cliente um trabalho pericial técnico, claro e confiável,
          com explicações acessíveis e fundamentação precisa que ajudem a
          esclarecer os fatos no processo judicial.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={isMobile ? { width: "100%" } : { width: "30%" }}
      >
        <VisibilityIcon
          sx={{
            fontSize: "clamp(1.2rem,6vmin,6rem)",
            color: "primary.100",
          }}
        />
        <Typography level="title-md" sx={{ color: "primary.100" }}>
          Visão
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          Proporcionar ao cliente a segurança de estar amparado por uma perícia
          sólida, bem construída e transparente, contribuindo diretamente para
          uma decisão judicial justa.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={isMobile ? { width: "100%" } : { width: "30%" }}
      >
        <BalanceIcon
          sx={{
            fontSize: "clamp(1.2rem,6vmin,6rem)",
            color: "primary.100",
          }}
        />
        <Typography level="title-md" sx={{ color: "primary.100" }}>
          Valores
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          Respeito ao cliente, atuação ética, compromisso com a verdade,
          linguagem acessível, transparência em cada etapa da perícia e
          responsabilidade com os prazos e com a Justiça.
        </Typography>
      </Box>
    </Box>
  );
};
