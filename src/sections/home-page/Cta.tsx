import { Box, Card, CardContent, Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import { DynamicForm } from "../../components/Form";
import content from "../../content/home-page/homePageContent.json";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const CTA = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.body",
      }}
    >
      <Section id="cta-section" padded={true}>
        <Box
          id="cta-container"
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          justifyItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            padding={"10px"}
          >
            <Card
              variant="solid"
              sx={{
                bgcolor: "background.surface",
                height: "100%",
                boxShadow: "lg",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                  padding: "20px",
                }}
              >
                <HelpOutlineIcon
                  sx={{
                    color: "primary.100",
                    fontSize: "clamp(20px,15vw,80px)",
                  }}
                />
                <Typography level="title-md" sx={{ color: "primary.100" }}>
                  {content.cta.title}
                </Typography>
                <Typography level="body-md">
                  <p>{content.cta.description}</p>
                  <p>{content.cta.description1}</p>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            padding={"10px"}
          >
            <DynamicForm />
          </Stack>
        </Box>
      </Section>
    </Stack>
  );
};
