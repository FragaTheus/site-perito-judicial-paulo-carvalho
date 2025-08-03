import { Box, FormLabel, Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";
import { useResContext } from "../../../contexts/ResponsiveContext";

export const Formacao = () => {
  const { isMobile } = useResContext();
  return (
    <CardLayout cardActionContent={false} cardTitle="Formacao academica">
      <Box
        flex={1}
        display={"flex"}
        gap={"10px"}
        sx={isMobile ? { flexDirection: "column" } : {}}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={isMobile ? { width: "100%" } : { width: "50%" }}
        >
          <FormLabel
            sx={{ fontSize: "clamp(0.6rem,2.5vmin,4rem)", fontWeight: 700 }}
          >
            Engenharia Ambiental
          </FormLabel>
          <Typography level="body-md">
            Formação voltada à análise técnica e controle de impactos ambientais
            em diversas áreas.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={isMobile ? { width: "100%" } : { width: "50%" }}
        >
          <FormLabel
            sx={{ fontSize: "clamp(0.6rem,2.5vmin,4rem)", fontWeight: 700 }}
          >
            Engenharia de Segurança do Trabalho
          </FormLabel>
          <Typography level="body-md">
            Especializado na prevenção de acidentes e avaliação de riscos em
            ambientes industriais.
          </Typography>
        </Box>
      </Box>
    </CardLayout>
  );
};
