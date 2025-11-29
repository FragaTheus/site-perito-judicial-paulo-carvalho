import { Box, Button, Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import content from "../../content/home-page/homePageContent.json";
import { useWppContext } from "../../contexts/WhatsAppContext";

export const HomeHero = () => {
  const { enviarMsg } = useWppContext();
  return (
    <Box
      sx={{
        backgroundImage: "url(/hero-home2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "85% 100%",
        width: "100%",
        height: "90svh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Section id="hero-section" padded={true}>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
          width={"100%"}
        >
          <Stack
            height={"100%"}
            width={"100%"}
            gap={"10px"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Stack>
              <Typography level="h2">{content.hero.title}</Typography>
              <Typography level="h3">{content.hero.subtitle}</Typography>

              <Typography level="h4" sx={{ color: "#ffffff" }}>
                {content.hero.descMobile}
              </Typography>
            </Stack>

            <Button
              id="hero-cta-btn"
              onClick={() => enviarMsg()}
              variant="solid"
              sx={{
                color: "#ffffff",
                gap: "10px",
                bgcolor: "#25D366",
                width: "70%",
              }}
            >
              <WhatsAppIcon />
              <Typography level="body-sm" sx={{ color: "#ffffff" }}>
                Entrar em contato
              </Typography>
            </Button>
          </Stack>
          <Stack height={"100%"} width={"100%"} minHeight={"45svh"}></Stack>
        </Box>
      </Section>
    </Box>
  );
};
