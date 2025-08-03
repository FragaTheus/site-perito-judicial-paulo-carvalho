import { Box, Divider, FormLabel, Typography } from "@mui/joy";
import { HeroSection } from "../../components/hero/HeroSection";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { CardLayout } from "../../layout/cards-layout/CardLayout";
import { PeritoEAssistente } from "../../components/perito-tecnico/PeritoEAssistente";

export const FuncaoPage = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          imgUrl="hero-funcao.jpeg"
          title="Qual o papel de um perito judicial?"
          subtitle="Engenheiro de segurança do trabalho | Perito Judicial"
        />
      }
      sections={[
        {
          dark: true,
          component: (
            <>
              <Box
                width={"80%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"center"}
              >
                <Typography
                  level="title-md"
                  sx={{ color: "primary.100", mt: "-20vh" }}
                >
                  Perito Judicial
                </Typography>
                <Divider />
                <Typography
                  level="title-sm"
                  sx={{ color: "#ffffff", width: "100%" }}
                >
                  O perito judicial é nomeado pelo juiz para esclarecer questões
                  técnicas que influenciam diretamente o resultado de um
                  processo. Na área de segurança do trabalho, ele avalia riscos,
                  investiga acidentes e verifica condições de insalubridade ou
                  periculosidade, sempre com base nas normas regulamentadoras.
                  Seu laudo é técnico, imparcial e possui grande peso na decisão
                  judicial.
                </Typography>
              </Box>
            </>
          ),
        },
        {
          dark: false,
          title: "Sobre o Perito Judicial:",
          component: (
            <>
              <CardLayout
                cardActionContent={false}
                cardTitle="O que é um perito judicial?"
              >
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
                  <Typography level="body-md">
                    O perito judicial é um profissional técnico, nomeado pelo
                    juiz, responsável por analisar fatos que exigem conhecimento
                    especializado dentro de um processo. Ele atua de forma
                    imparcial, oferecendo um laudo claro, embasado e objetivo,
                    que serve como base para decisões judiciais.
                  </Typography>
                  <FormLabel
                    sx={{
                      fontSize: "clamp(0.6rem,2.5vmin,4rem)",
                      fontWeight: 700,
                    }}
                  >
                    Atuação em segurança do trabalho
                  </FormLabel>
                  <Typography level="body-md">
                    No campo da segurança do trabalho, o perito avalia riscos
                    ocupacionais, investiga acidentes, analisa condições de
                    insalubridade e periculosidade, e verifica o cumprimento das
                    normas regulamentadoras, como a NR-12, NR-15 e NR-17.
                  </Typography>
                  <FormLabel
                    sx={{
                      fontSize: "clamp(0.6rem,2.5vmin,4rem)",
                      fontWeight: 700,
                    }}
                  >
                    Importância do laudo técnico
                  </FormLabel>
                  <Typography level="body-md">
                    O laudo elaborado pelo perito é um documento oficial que
                    traduz aspectos técnicos para o juiz e as partes envolvidas.
                    Ele tem grande peso no processo e pode ser decisivo para o
                    desfecho da ação, desde que elaborado com clareza, precisão
                    e responsabilidade.
                  </Typography>
                </Box>
              </CardLayout>
              <CardLayout
                cardActionContent={false}
                cardTitle="Quando o perito é necessário?"
              >
                <Typography>
                  A perícia técnica é solicitada quando o juiz precisa de
                  esclarecimentos sobre questões que envolvem conhecimento
                  técnico, como acidentes de trabalho, condições insalubres,
                  avaliação de equipamentos ou ergonomia. Nestes casos, o perito
                  atua como um “tradutor técnico” do processo.
                </Typography>
              </CardLayout>
            </>
          ),
        },

        {
          title: "Diferença entre perito e assistente técnico:",
          dark: false,
          component: <PeritoEAssistente />,
        },
      ]}
    ></PageLayout>
  );
};
