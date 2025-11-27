import { Card, CardContent, Stack, Typography } from "@mui/joy";
import content from "../content/home-page/homePageContent.json";
import TimelineTwoToneIcon from "@mui/icons-material/TimelineTwoTone";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

type ProcedureStepProps = {
  title: string;
  text: string;
};

const ProcedureStep = (t: ProcedureStepProps) => {
  return (
    <Stack
      alignItems={"flex-start"}
      justifyContent={"center"}
      direction={"column"}
      width={"100%"}
    >
      <Stack
        id="procedure-card-header"
        alignItems={"flex-start"}
        justifyContent={"center"}
        width={"100%"}
        gap={"20px"}
      >
        <Typography level="body-sm">
          <strong>{t.title}</strong>
        </Typography>
      </Stack>

      <Typography level="body-sm">
        <p>{t.text}</p>
      </Typography>
    </Stack>
  );
};

type ProcedureCard = {
  title: string;
  subtitle: string;
};

export const ProcedureCard = (type: ProcedureCard) => {
  const steps = [
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
  return (
    <Card
      variant="solid"
      sx={{
        boxShadow: "lg",
        bgcolor: "background.surface",
        minHeight: "40svh",
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <Stack
          alignItems={"flex-start"}
          justifyContent={"center"}
          padding={"20px"}
          sx={{
            margin: {
              xs: "0px",
              md: "auto",
            },
          }}
        >
          <TimelineTwoToneIcon
            sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 80px)" }}
          />
          <Typography level="title-md">{type.title}</Typography>
          <Typography level="title-md">{type.subtitle}</Typography>
        </Stack>
        <Stack
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          padding={"20px"}
          spacing={"5px"}
        >
          {steps.map((s, i) => (
            <>
              {i != 0 && (
                <VerticalAlignBottomIcon
                  sx={{
                    color: "primary.100",
                    fontSize: "clamp(10px, 5vw, 40px)",
                  }}
                />
              )}
              <ProcedureStep key={i} title={s.title} text={s.text} />
            </>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
