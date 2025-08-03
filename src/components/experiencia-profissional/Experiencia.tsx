import { Box, CardActions, Divider, Typography } from "@mui/joy";
import { useResContext } from "../../contexts/ResponsiveContext";

export const AtuacaoTecnica = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      width={"75%"}
      sx={isMobile ? { gap: "5px" } : { gap: "20px" }}
    >
      <Divider />
      <Typography
        level="title-md"
        fontWeight={500}
        sx={{ color: "text.primary", textAlign: "left" }}
      >
        Minhas principais especializações incluem:
      </Typography>
      <Typography
        level="body-lg"
        fontWeight={500}
        sx={{ color: "text.primary", textAlign: "left" }}
      >
        - Perícias técnicas em insalubridade, periculosidade, ergonomia e
        acidentes de trabalho.
      </Typography>
      <Typography
        level="body-lg"
        fontWeight={500}
        sx={{ color: "text.primary", textAlign: "left" }}
      >
        - Pareceres técnicos detalhados e fundamentados.
      </Typography>
      <Typography
        level="body-lg"
        fontWeight={500}
        sx={{ color: "text.primary", textAlign: "left" }}
      >
        - Avaliação de máquinas e equipamentos, com foco na conformidade com a
        NR12.
      </Typography>
      <Typography
        level="body-lg"
        fontWeight={500}
        sx={{ color: "text.primary", textAlign: "left" }}
      >
        - Inventários técnicos e levantamentos quantitativos e qualitativos de
        ambientes e processos.
      </Typography>
      <CardActions sx={{ height: "1svh" }} />
    </Box>
  );
};
