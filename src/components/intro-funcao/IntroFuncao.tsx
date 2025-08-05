import { Box, Divider, Typography } from "@mui/joy";

export const IntroFuncao = () => {
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
          Perito Judicial
        </Typography>
        <Divider />
        <Typography level="title-sm" sx={{ color: "#ffffff", width: "100%" }}>
          O perito é nomeado pelo juiz para esclarecer questões técnicas que
          influenciam diretamente o resultado de um processo. Na área de
          segurança do trabalho, ele avalia riscos, investiga acidentes e
          verifica condições de insalubridade ou periculosidade, sempre com base
          nas normas regulamentadoras. Seu laudo é técnico, imparcial e possui
          grande peso na decisão judicial.
        </Typography>
      </Box>
    </>
  );
};
