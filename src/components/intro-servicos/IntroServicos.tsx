import { Box, Divider, Typography } from "@mui/joy";
import { useResContext } from "../../contexts/ResponsiveContext";
import { IntroCard } from "../cards/intro-card/IntroCard";

export const IntroServicos = () => {
  const { isMobile } = useResContext();
  return (
    <>
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={isMobile ? "10px" : "20px"}
      >
        <Typography level="title-lg" sx={{ color: "primary.100", mt: "-20px" }}>
          Precisa de um especialista para sua perícia?
        </Typography>
        <Divider />
        <Typography level="title-sm">
          Paulo Carvalho é perito judicial com mais de 20 anos de experiência.
          Atua com ética e precisão em casos de saúde e segurança. É referência
          no meio jurídico pela qualidade dos seus laudos técnicos.
        </Typography>
      </Box>
      <Box
        width={"99vw"}
        display={"flex"}
        justifyContent={"center"}
        sx={{ overflowX: "auto" }}
      >
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={"10px"}
          marginX={"50px"}
        >
          <IntroCard
            cardTitle={"A voz do processo"}
            text={"Entenda como a perícia técnica contribui com a justiça."}
            path={"#funcao"}
          />
          <IntroCard
            cardTitle={"Sobre Paulo Carvalho"}
            text={"Conheça a trajetória por trás da experiência."}
            path={"#sobre"}
          />
          <IntroCard
            cardTitle={"Áreas de atuação"}
            text={
              "Conheça a metodologia e o impacto de uma atuação especializada."
            }
            path={"#servico"}
          />
        </Box>
      </Box>
    </>
  );
};
