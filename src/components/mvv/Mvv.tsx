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
          Oferecer suporte técnico preciso e imparcial à Justiça, por meio de
          análises fundamentadas que contribuam para decisões claras e justas.
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
          Ser reconhecido como referência nacional em perícias judiciais, pela
          excelência técnica e compromisso com a verdade.
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
          Atuação com ética, imparcialidade, excelência, responsabilidade social
          e total comprometimento com a qualidade técnica.
        </Typography>
      </Box>
    </Box>
  );
};
