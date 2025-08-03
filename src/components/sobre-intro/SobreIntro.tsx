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
        Olá, sou Paulo de Carvalho Pereira, engenheiro de segurança do trabalho
        e engenheiro ambiental, atuando há mais de 20 anos na área de segurança
        do trabalho. Atualmente, sou perito judicial, prestando serviços
        técnicos especializados que auxiliam a Justiça na tomada de decisões em
        processos que envolvem questões técnicas e ambientais. Minha atuação é
        pautada pela imparcialidade, ética e precisão técnica, com foco em
        oferecer análises claras, objetivas e embasadas.
      </Typography>
    </Box>
  );
};
