import {
  Box,
  Button,
  Card,
  CardActions,
  CardCover,
  Stack,
  Typography,
} from "@mui/joy";
import content from "../../content/home-page/homePageContent.json";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useResContext } from "../../contexts/ResponsiveContext";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export const Sobre = () => {
  const { isMobile, isTablet } = useResContext();

  return (
    <Stack width={isMobile ? "95%" : "80%"} height={"100%"}>
      <Card
        variant="soft"
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "background.surface",
          boxShadow: "lg",
        }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={isTablet ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
          gap={isMobile ? "5px" : "20px"}
        >
          <Card
            variant="soft"
            sx={{
              width: "100%",
              height: "clamp(250px,50vw,500px)",
              boxShadow: "lg",
              justifyContent: "flex-start",
            }}
          >
            <CardCover>
              <img
                src="/sobre-img.jpg"
                style={{ objectFit: "cover", objectPosition: "30%" }}
              ></img>
            </CardCover>
            <CardActions
              sx={{
                ml: "-50px",
                boxShadow: "lg",
                bgcolor: "#1c1c1c",
                display: "flex",
                height: "20%",
                padding: "30px",
              }}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <FactCheckIcon fontSize="large" sx={{ color: "primary.100" }} />
                <Typography
                  level="body-sm"
                  textAlign={"start"}
                  sx={{ color: "#ffffff" }}
                >
                  {content.sobre.card.title}
                </Typography>
              </Stack>
            </CardActions>
          </Card>

          <Stack flex={1} alignItems={"flex-start"}>
            <Typography level="body-lg" fontWeight={800}>
              {content.sobre.card.subtitle}
            </Typography>
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
              flex={1}
            >
              <Typography level="body-md">
                {content.sobre.card.bodyText}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <CardActions sx={{ bgcolor: "transparent" }}>
          <Button
            variant="outlined"
            component={RouterLink as any}
            to={"/sobre"}
            sx={
              isMobile
                ? { color: "#1c1c1c", alignSelf: "center" }
                : { color: "#1c1c1c", alignSelf: "flex-start" }
            }
          >
            Saber mais
            <KeyboardArrowRight sx={{ fontSize: "lg" }} />
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};
{
  content.sobre.card.bodyText;
}
