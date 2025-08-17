import { Box, Divider, Typography } from "@mui/joy";

export const IntroHome = () => {
  return (
    <>
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Typography level="title-lg" sx={{ color: "primary.100", mt: "-20px" }}>
          Precisa de um especialista para sua perícia?
        </Typography>
        <Divider />
        <Typography
          level="title-sm"
          sx={{ color: "text.primary", width: "100%" }}
        >
          Paulo Carvalho é perito judicial com mais de 20 anos de experiência.
          Atua com ética e precisão em casos de saúde e segurança. É referência
          no meio jurídico pela qualidade dos seus laudos técnicos.
        </Typography>
      </Box>
    </>
  );
};
