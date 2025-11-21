import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/joy";
import content from "../../content/home-page/homePageContent.json";
import SwipeableViews from "react-swipeable-views";
import ArticleIcon from "@mui/icons-material/Article";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import BalanceTwoToneIcon from "@mui/icons-material/BalanceTwoTone";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useEffect, useState } from "react";
import { useResContext } from "../../contexts/ResponsiveContext";
import { Link as RouterLink } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";

const introCards = [
  {
    icon: <ArticleIcon sx={{ color: "primary.100" }} />,
    title: content.intro.cardProps.title,
    text: content.intro.cardProps.text,
  },
  {
    icon: <SearchTwoToneIcon sx={{ color: "primary.100" }} />,
    title: content.intro.cardProps1.title,
    text: content.intro.cardProps1.text,
  },
  {
    icon: <BalanceTwoToneIcon sx={{ color: "primary.100" }} />,
    title: content.intro.cardProps2.title,
    text: content.intro.cardProps2.text,
  },
  {
    icon: <EngineeringIcon sx={{ color: "primary.100" }} />,
    title: content.intro.cardProps3.title,
    text: content.intro.cardProps3.text,
  },
];

export const IntroHome = () => {
  const { isMobile } = useResContext();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % introCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={"center"}
        width={"80%"}
        justifyContent={"space-evenly"}
        spacing={"10px"}
      >
        <Stack width={isMobile ? "100%" : "80%"} alignItems={"flex-start"}>
          <Typography level="title-sm" sx={{ color: "#ffffff" }}>
            {content.intro.description}
          </Typography>
        </Stack>
        {isMobile && <Divider />}
        <Stack
          width={isMobile ? "100%" : "30%"}
          justifyContent={"center"}
          spacing={"10px"}
        >
          <SwipeableViews
            enableMouseEvents
            index={activeIndex}
            onChangeIndex={(index) => setActiveIndex(index)}
          >
            {introCards.map((c, i) => (
              <Card
                key={i}
                variant="outlined"
                sx={{
                  bgcolor: "transparent",
                  minHeight: "25svh",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  justifySelf: "center",
                }}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  {c.icon}
                  <Typography level="body-sm" sx={{ color: "primary.100" }}>
                    {c.title}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 1, borderColor: "primary.100" }} />

                <CardContent sx={{ width: "80%" }}>
                  <Typography
                    level="body-sm"
                    textAlign={"center"}
                    sx={{ color: "#ffffff" }}
                  >
                    {c.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </SwipeableViews>
        </Stack>
      </Stack>
      <Stack
        width={"80%"}
        direction={"row"}
        spacing={"5px"}
        justifyContent={isMobile ? "center" : ""}
      >
        <Button
          variant="outlined"
          component={RouterLink as any}
          to={"/funcao"}
          sx={isMobile ? { alignSelf: "center" } : { alignSelf: "flex-start" }}
        >
          Entender mais
          <KeyboardArrowRight sx={{ fontSize: "lg" }} />
        </Button>
      </Stack>
    </>
  );
};
