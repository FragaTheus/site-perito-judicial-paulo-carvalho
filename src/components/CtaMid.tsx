import { Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import GavelIcon from "@mui/icons-material/Gavel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import content from "../content/home-page/homePageContent.json";

export const CtaMid = () => {
  return (
    <Card
      variant="solid"
      sx={{
        bgcolor: "background.surface",
        boxShadow: "lg",
        width: "100%",
        minHeight: "60dvh",
        padding: "20px",
      }}
    >
      <Stack id="card-title" width={"100%"} height={"20%"} padding={"20px"}>
        <GavelIcon
          sx={{ color: "primary.100", fontSize: "clamp(20px,15vw,80px)" }}
        />
      </Stack>
      <CardContent
        sx={{
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Typography level="title-sm">{content.ctaMid.title}</Typography>

        <Typography level="body-md">{content.ctaMid.text}</Typography>
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
      </CardContent>
    </Card>
  );
};
