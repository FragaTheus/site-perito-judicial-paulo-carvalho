import { Box, Divider, Typography } from "@mui/joy";
import GavelIcon from "@mui/icons-material/Gavel";
import DescriptionIcon from "@mui/icons-material/Description";
import { useResContext } from "../../contexts/ResponsiveContext";

export const PeritoEAssistente = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"40px"}
      padding={"40px"}
      sx={isMobile ? { flexDirection: "column" } : {}}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={isMobile ? { width: "100%" } : { width: "40%" }}
      >
        <GavelIcon
          sx={{
            fontSize: "clamp(1.2rem,6vmin,6rem)",
            color: "primary.100",
          }}
        />
        <Typography level="title-md" sx={{ color: "primary.100" }}>
          Perito Judicial
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          É o profissional técnico nomeado pelo juiz para atuar de forma
          imparcial no processo. Sua função é analisar tecnicamente os fatos,
          elaborar um laudo oficial e esclarecer dúvidas que exigem conhecimento
          especializado, auxiliando diretamente o juiz na decisão.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        sx={isMobile ? { width: "100%" } : { width: "40%" }}
      >
        <DescriptionIcon
          sx={{
            fontSize: "clamp(1.2rem,6vmin,6rem)",
            color: "primary.100",
          }}
        />
        <Typography level="title-md" sx={{ color: "primary.100" }}>
          Assistente Técnico
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          É o profissional contratado por uma das partes (autor ou réu) para
          acompanhar a perícia oficial. Atua com foco nos interesses da parte
          que o contratou, podendo apresentar um parecer técnico próprio,
          complementar, reforçar ou até contestar o laudo do perito judicial.
        </Typography>
      </Box>
    </Box>
  );
};
