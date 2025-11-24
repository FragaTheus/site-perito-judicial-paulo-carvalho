import { Box, Button, Stack, Typography, useTheme } from "@mui/joy";
import { Section } from "../../components/Section";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import content from "../../content/home-page/homePageContent.json";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useMediaQuery } from "@mui/material";

const props = [
  {
    text: content.hero.desc,
  },
  {
    text: content.hero.desc1,
  },
  {
    text: content.hero.desc2,
  },
];

export const HomeHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      id="hero-bg"
      sx={{
        backgroundImage: "url(/hero-home.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "90svh",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Section id="hero-section" padded={true}>
        <Stack id="hero-content">
          <Typography level="h1">{content.hero.title}</Typography>
          <Typography level="h2">{content.hero.subtitle}</Typography>
          {props.map((p, i) => (
            <Stack key={i} direction={"row"} alignItems={"center"}>
              <FiberManualRecordIcon
                fontSize="small"
                sx={{ color: "primary.100" }}
              />
              <Typography level="title-sm" sx={{ color: "#ffffff" }}>
                {p.text}
              </Typography>
            </Stack>
          ))}

          <Stack id="hero-cta" maxWidth={"350px"} mt={"50px"}>
            <Button
              variant="solid"
              sx={{
                color: "#ffffff",
                gap: "10px",
                bgcolor: "#25D366",
              }}
            >
              <WhatsAppIcon />
              <Typography level="title-sm" sx={{ color: "#ffffff" }}>
                Entre em contato
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};
