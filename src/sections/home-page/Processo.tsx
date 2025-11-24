import { Box, Card, Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import content from "../../content/home-page/homePageContent.json";

const step = [
  {
    step: "Etapa 1",
    title: content.processoTrabalho.steps.step1.title,
    text: content.processoTrabalho.steps.step1.text,
  },
  {
    step: "Etapa 2",
    title: content.processoTrabalho.steps.step2.title,
    text: content.processoTrabalho.steps.step2.text,
  },
  {
    step: "Etapa 3",
    title: content.processoTrabalho.steps.step3.title,
    text: content.processoTrabalho.steps.step3.text,
  },
  {
    step: "Etapa 4",
    title: content.processoTrabalho.steps.step4.title,
    text: content.processoTrabalho.steps.step4.text,
  },
];

export const Processo = () => {
  return (
    <Stack
      bgcolor={"background.body"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="processo-section" padded={false}>
        <Stack padding={"20px"} spacing={"10px"}>
          <Typography level="title-md">
            {content.processoTrabalho.title}
          </Typography>
          <Typography level="body-md">
            {content.processoTrabalho.description}
          </Typography>
        </Stack>

        <Stack
          sx={{
            overflowX: "auto",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Card
            variant="solid"
            sx={{
              width: "1400px",
              boxShadow: "lg",
              bgcolor: "background.surface",
              height: "280px",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "80px",
                justifyItems: "center",
                alignContent: "center",
              }}
            >
              {step.map((s, i) => (
                <Stack key={i} spacing={"30px"}>
                  <Typography level="title-sm" sx={{ color: "primary.100" }}>
                    {s.step}
                  </Typography>
                  <Typography level="body-md">{s.title}</Typography>
                  <Typography level="body-sm">{s.text}</Typography>
                </Stack>
              ))}
            </Box>
          </Card>
        </Stack>
      </Section>
    </Stack>
  );
};
