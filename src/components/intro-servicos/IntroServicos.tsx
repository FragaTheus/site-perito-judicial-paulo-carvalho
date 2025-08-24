import { Box, Divider, Typography } from "@mui/joy";

export const IntroServicos = () => {
  return (
    <>
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Typography level="title-md" sx={{ color: "primary.100", mt: "-20vh" }}>
          Experiência e Atuação Judicial
        </Typography>
        <Divider />
        <Typography level="title-sm" sx={{ color: "#121212", width: "100%" }}>
          Com experiência consolidada na área pericial, o perito judicial já
          atuou em diversas varas da Justiça, sempre com compromisso,
          imparcialidade e qualidade técnica. Sua trajetória reforça a
          credibilidade necessária para auxiliar magistrados e advogados na
          tomada de decisões.
        </Typography>
      </Box>
    </>
  );
};
