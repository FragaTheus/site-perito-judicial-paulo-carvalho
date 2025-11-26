import { Box, Stack } from "@mui/joy";
import { Section } from "../../components/Section";
import { DynamicForm } from "../../components/Form";
import content from "../../content/home-page/homePageContent.json";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { TitleCard } from "../../components/TitleCard";

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
            <TitleCard
              icon={
                <HelpOutlineIcon
                  sx={{
                    color: "primary.100",
                    fontSize: "clamp(20px,15vw,80px)",
                  }}
                />
              }
              title={content.cta.title}
              text={content.cta.description}
              complement={content.cta.description1}
            />
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
