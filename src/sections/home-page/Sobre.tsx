import {
  Button,
  Card,
  CardActions,
  CardCover,
  Stack,
  Typography,
} from "@mui/joy";
import { Section } from "../../components/Section";
import { KeyboardArrowRight } from "@mui/icons-material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import content from "../../content/home-page/homePageContent.json";
import PersonIcon from "@mui/icons-material/Person";

export const Sobre = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"background.surface"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="sobre-section" padded={true}>
        <Stack padding={"20px"} spacing={"10px"} alignSelf={"flex-start"}>
          <Typography level="title-md" sx={{ color: "primary.100" }}>
            {content.sobre.sectionDescription}
          </Typography>
        </Stack>
        <Stack
          id="sobre-container"
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            justifyContent: "center",
          }}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            padding={"10px"}
            flex={1}
          >
            <Card
              variant="solid"
              sx={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                width: "90%",
                height: "clamp(280px,50vw,450px)",
              }}
            >
              <CardCover>
                <img
                  src="sobre-img.jpg"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                ></img>
              </CardCover>
              <CardActions
                sx={{
                  bgcolor: "#1c1c1c",
                  p: "10px",
                  borderRadius: "sm",
                  ml: "-25px",
                  display: "flex",
                  height: "20%",
                  boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <PersonIcon sx={{ color: "primary.100", fontSize: "large" }} />
                <Typography level="body-md" sx={{ color: "#ffffff" }}>
                  {content.sobre.sectionTitle}
                </Typography>
              </CardActions>
            </Card>
          </Stack>

          <Stack
            alignItems={"flex-start"}
            justifyContent={"space-evenly"}
            paddingX={"25px"}
            flex={1}
            spacing={"15px"}
          >
            <Typography level="title-md">
              {content.sobre.content.header}
            </Typography>
            <Typography level="body-md">
              {content.sobre.content.text}
            </Typography>

            <Stack width={"100%"}>
              <Card
                variant="solid"
                sx={{
                  bgcolor: "background.body",
                  boxShadow: "lg",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <AssessmentIcon
                  sx={{ color: "primary.100", fontSize: "30px" }}
                />
                <Typography level="body-sm">
                  <p>+3.000 Perícias</p>
                </Typography>
                <Typography level="body-sm">
                  <p>+1.500 Assistências Técnicas</p>
                </Typography>
              </Card>
            </Stack>
            <Button variant="outlined">
              <Typography level="body-md">Saiba mais</Typography>
              <KeyboardArrowRight sx={{ color: "text.primary" }} />
            </Button>
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
};
