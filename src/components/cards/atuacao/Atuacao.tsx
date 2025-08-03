import { Box, FormLabel, Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const AtuacaoCard = () => {
  return (
    <CardLayout cardTitle="Atuacao tecnica" cardActionContent={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FormLabel
          sx={{ fontSize: "clamp(0.6rem,2.5vmin,4rem)", fontWeight: 700 }}
        >
          Minhas principais especializações incluem:
        </FormLabel>
        <Typography>Pareceres técnicos detalhados e fundamentados</Typography>
        <Typography>
          Avaliação de máquinas e equipamentos, com foco na conformidade com a
          NR12
        </Typography>
        <Typography>
          Perícias técnicas em insalubridade, periculosidade, ergonomia e
          acidentes de trabalho
        </Typography>
        <Typography>
          Inventários técnicos e levantamentos quantitativos e qualitativos de
          ambientes e processos
        </Typography>
      </Box>
    </CardLayout>
  );
};
