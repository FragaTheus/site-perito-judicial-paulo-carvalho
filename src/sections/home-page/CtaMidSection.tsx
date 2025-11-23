import { Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import { CtaMid } from "../../components/CtaMid";
import content from "../../content/home-page/homePageContent.json";

export const CtaMidSection = () => {
  return (
    <Stack bgcolor={"background.body"} width={"100%"}>
      <Section id="cta-mid-section" padded={true}>
        <Stack id="cta-mid-title" padding={"20px"} spacing={"20px"}>
          <Typography level="title-md" sx={{ color: "primary.100" }}>
            {content.ctaMobile.title}
          </Typography>
          <Typography level="body-md">
            {content.ctaMobile.description}
          </Typography>
        </Stack>
        <CtaMid></CtaMid>
      </Section>
    </Stack>
  );
};
