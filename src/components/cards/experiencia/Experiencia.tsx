import { Box, FormLabel, Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const ExperienciaCard = () => {
  return (
    <CardLayout cardTitle="Experiência Profissional" cardActionContent={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "inherit",
            justifyContent: "inherit",
            flexDirection: "inherit",
          }}
        >
          <FormLabel
            sx={{ fontSize: "clamp(0.6rem,2.5vmin,4rem)", fontWeight: 700 }}
          >
            Paulo atua há 20 anos na área de segurança do trabalho, com passagem
            por diferentes setores como:
          </FormLabel>
          <Typography>Construção civil</Typography>
          <Typography>Indústrias metalúrgicas</Typography>
          <Typography>Indústrias químicas</Typography>
          <Typography>Setor de telecomunicações</Typography>
          <Typography>Indústria alimentícia</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "inherit",
            justifyContent: "inherit",
            flexDirection: "inherit",
          }}
        >
          <FormLabel
            sx={{ fontSize: "clamp(0.6rem,2.5vmin,4rem)", fontWeight: 700 }}
          >
            Nos últimos 10 anos, ele vem atuando como perito judicial junto às
            varas:
          </FormLabel>
          <Typography>1ª Vara de Mogi das Cruzes/SP</Typography>
          <Typography>3ª Vara de São José dos Campos/SP</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "inherit",
            justifyContent: "inherit",
            flexDirection: "inherit",
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
      </Box>
    </CardLayout>
  );
};
