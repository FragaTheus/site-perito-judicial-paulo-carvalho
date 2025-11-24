import { Box, Card, CardActions, CardCover, Stack, Typography } from "@mui/joy";
import content from "../../content/home-page/homePageContent.json";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Section } from "../../components/Section";

export const IntroHome = () => {
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
            gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          >
            <Card
              variant="solid"
              sx={{
                height: "clamp(280px,50vw,450px)",
                width: "90%",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <CardCover>
                <img
                  src="funcao-img.jpg"
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
                <EngineeringIcon
                  sx={{ color: "primary.100", fontSize: "large" }}
                />
                <Typography level="body-md" sx={{ color: "#ffffff" }}>
                  {content.intro.title}
                </Typography>
              </CardActions>
            </Card>

            <Stack
              alignItems={"flex-start"}
              justifyContent={"space-evenly"}
              width={"90%"}
              spacing={"15px"}
            >
              <ManageSearchIcon
                sx={{
                  color: "primary.100",
                  fontSize: "clamp(20px,15vw,80px)",
                }}
              />
              <Typography level="title-lg" sx={{ color: "text.primary" }}>
                {content.intro.cardDesc}
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
