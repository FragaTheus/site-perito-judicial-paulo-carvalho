import { Box, Stack, Typography, useTheme } from "@mui/joy";
import content from "../../content/home-page/homePageContent.json";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Section } from "../../components/Section";
import { useMediaQuery } from "@mui/material";

export const IntroHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      id="intro-bg"
      width={"100%"}
      bgcolor={"background.surface"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="home-intro" padded={true}>
        <Stack id="intro-container" alignSelf={"center"} justifySelf={"center"}>
          <Box
            id="itro-content"
            display={"grid"}
            alignContent={"center"}
            justifyItems={"center"}
            gap={"10px"}
            gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          >
            <Stack
              width={isMobile ? "90%" : "50%"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              spacing={"10px"}
            >
              <ManageSearchIcon
                sx={{
                  color: "primary.100",
                  fontSize: "clamp(20px,10vw,80px)",
                }}
              />

              <Typography level="title-lg" sx={{ color: "text.primary" }}>
                {content.intro.desc}
              </Typography>
            </Stack>
            <Stack
              alignItems={"flex-start"}
              justifyContent={"center"}
              width={"90%"}
              spacing={"10px"}
            >
              <Typography level="body-sm" alignSelf={"flex-start"}>
                {content.intro.question}
              </Typography>
              <Typography level="body-md" sx={{ color: "text.primary" }}>
                {content.intro.description}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

{
  /*
  Em breve
              <Button variant="outlined">
                <Typography level="body-md" sx={{ color: "text.primary" }}>
                  Saiba mais
                </Typography>
                <KeyboardArrowRight sx={{ color: "text.primary" }} />
              </Button>
  */
}
