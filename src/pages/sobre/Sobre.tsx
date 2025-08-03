import { Box, Divider, Typography } from "@mui/joy";
import {
  ExperienciaCard,
  FormacaoCard,
  QuemSouCard,
} from "../../components/cards/page-sobre-cards/PageSobreCards";
import { PageLayout } from "../../layout/page-layout/PageLayout";

export const PageSobre = () => {
  return (
    <PageLayout
      sections={[
        {
          title: "Quem e Paulo Carvalho:",
          component: (
            <>
              <QuemSouCard />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "70%",
                }}
              >
                <Typography
                  level="title-md"
                  fontWeight={700}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  Experiência Profissional:
                </Typography>
                <Divider />

                <Typography
                  level="title-sm"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  Atuo há duas décadas na área de segurança do trabalho, com
                  passagem por diferentes setores como:
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -Construção civil
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -Indústrias metalúrgicas
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -Indústrias químicas
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -Setor de telecomunicações
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -Indústria alimentícia
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={700}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  Nos últimos 10 anos, venho atuando como perito judicial junto
                  às varas:
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -1ª Vara de Mogi das Cruzes/SP
                </Typography>
                <Typography
                  level="body-md"
                  fontWeight={500}
                  sx={{ color: "text.primary", textAlign: "left" }}
                >
                  -3ª Vara de São José dos Campos/SP
                </Typography>
              </Box>
              <FormacaoCard />
            </>
          ),
        },

        {
          component: <ExperienciaCard />,
        },
        {
          component: <FormacaoCard />,
        },
      ]}
    ></PageLayout>
  );
};
