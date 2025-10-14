import { Box, Divider, Typography } from "@mui/joy";

export const SobreIntro = () => {
  return (
    <Box
      width={"80%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
    >
      <Typography level="title-md" sx={{ color: "primary.100", mt: "-20vh" }}>
        Paulo Carvalho
      </Typography>
      <Divider />
      <Typography level="title-sm" sx={{ color: "#ffffff", width: "100%" }}>
        Paulo de Carvalho Pereira é Engenheiro de Segurança do Trabalho e
        Engenheiro Ambiental, com mais de 20 anos de experiência na área de
        segurança do trabalho. Atualmente, atua como Perito Judicial, prestando
        serviços técnicos especializados que auxiliam a Justiça na tomada de
        decisões em processos relacionados a questões técnicas e ambientais. Sua
        atuação é pautada pela imparcialidade, ética e precisão técnica, com
        foco em oferecer análises claras, objetivas e embasadas.
      </Typography>
    </Box>
  );
};
