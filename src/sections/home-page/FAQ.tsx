import { Box, Card, CardCover, Stack, Typography, useTheme } from "@mui/joy";
import { Section } from "../../components/Section";
import { FAQCard } from "../../components/FAQCard";
import content from "../../content/home-page/homePageContent.json";
import { useMediaQuery } from "@mui/material";

const questons = [
  {
    question: content.faq.pergunta1.pergunta,
    answer: content.faq.pergunta1.resposta,
  },
  {
    question: content.faq.pergunta2.pergunta,
    answer: content.faq.pergunta2.resposta,
  },
  {
    question: content.faq.pergunta3.pergunta,
    answer: content.faq.pergunta3.resposta,
  },
  {
    question: content.faq.pergunta4.pergunta,
    answer: content.faq.pergunta4.resposta,
  },
];

export const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"background.body"}
    >
      <Section id="faq-section" padded={true}>
        <Stack padding={"20px"} width={"100%"}>
          <Typography level="title-md">FAQ - Perguntas Frequentes</Typography>
        </Stack>

        <Box
          display={"grid"}
          gridTemplateColumns={isMobile ? "" : "repeat(2, 1fr)"}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            spacing={"20px"}
            padding={"20px"}
          >
            {questons.map((q, i) => (
              <FAQCard key={i} question={q.question} answer={q.answer} />
            ))}
          </Stack>
          {!isMobile && (
            <Card variant="solid">
              <CardCover>
                <img src="faq.jpg"></img>
              </CardCover>
            </Card>
          )}
        </Box>
      </Section>
    </Stack>
  );
};
