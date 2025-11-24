import { Button, Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import content from "../../content/home-page/homePageContent.json";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const CTAMid = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"#1c1c1c"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="" padded={true}>
        <Stack>
          <Typography level="title-md" sx={{ color: "#ffffff" }}>
            {content.ctaMid.title}
          </Typography>

          <Typography level="body-md" sx={{ color: "#ffffff" }}>
            <p>{content.ctaMid.complement}</p>
          </Typography>
          <Button
            variant="solid"
            sx={{
              color: "#ffffff",
              gap: "10px",
              bgcolor: "#25D366",
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <WhatsAppIcon />
            <Typography level="body-sm" sx={{ color: "#ffffff" }}>
              Falar com o Especialista
            </Typography>
          </Button>
        </Stack>
      </Section>
    </Stack>
  );
};
