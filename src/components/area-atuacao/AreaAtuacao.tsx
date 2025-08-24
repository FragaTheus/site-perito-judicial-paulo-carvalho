import { Box, Divider, Typography } from "@mui/joy";
import { CardLayout } from "../../layout/cards-layout/CardLayout";

export const AreaAtuacao = () => {
  return (
    <CardLayout
      cardTitle="Entre os locais de atuação estão:"
      cardActionContent={false}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>Poá</Typography>
          <Typography>1ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>Suzano</Typography>
          <Typography>2ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>Guarulhos/SP</Typography>
          <Typography>6ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>Mogi das Cruzes</Typography>
          <Typography>1ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>São José dos Campos</Typography>
          <Typography>5ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>São Paulo – Zona Leste</Typography>
          <Typography>4ª Vara</Typography>
        </Box>
        <Divider></Divider>

        <Box width={"70vw"}></Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography>Santo André</Typography>
          <Typography>1ª e 4ª Vara</Typography>
        </Box>
        <Divider></Divider>
      </Box>
    </CardLayout>
  );
};
