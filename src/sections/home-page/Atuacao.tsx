import {
  Box,
  Card,
  CardContent,
  CardCover,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { Section } from "../../components/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import content from "../../content/home-page/homePageContent.json";
import { CardActions, useMediaQuery } from "@mui/material";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import TaskIcon from "@mui/icons-material/Task";
import HandymanIcon from "@mui/icons-material/Handyman";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useMotionValueEvent } from "framer-motion";
import ConstructionIcon from "@mui/icons-material/Construction";

const imagens = ["atuacao-img.jpeg", "atuacao-img1.jpeg", "atuacao-img3.jpeg"];

const cards = [
  {
    icon: (
      <AssuredWorkloadIcon
        sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 30px)" }}
      />
    ),
    title: content.atuacao.card1.title,
    text: content.atuacao.card1.text,
    small: content.atuacao.card1.small,
  },
  {
    icon: (
      <TaskIcon
        sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 30px)" }}
      />
    ),
    title: content.atuacao.card2.title,
    text: content.atuacao.card2.text,
    small: content.atuacao.card2.small,
  },
  {
    icon: (
      <HandymanIcon
        sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 30px)" }}
      />
    ),
    title: content.atuacao.card3.title,
    text: content.atuacao.card3.text,
    small: content.atuacao.card3.small,
  },
  {
    icon: (
      <AnalyticsIcon
        sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 30px)" }}
      />
    ),
    title: content.atuacao.card4.title,
    text: content.atuacao.card4.text,
    small: content.atuacao.card4.small,
  },
];

export const Atuacao = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const imagemIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, imagens.length - 1]
  );

  const [currentImg, setCurrentImg] = useState(imagens[0]);
  const [nextImg, setNextImg] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useMotionValueEvent(imagemIndex, "change", (latest) => {
    const i = Math.round(latest);
    const bounded = Math.min(imagens.length - 1, Math.max(0, i));

    const novaImagem = imagens[bounded];

    if (novaImagem === currentImg) return;
    if (isFading) return;

    const preload = new Image();
    preload.src = novaImagem;

    preload.onload = () => {
      setNextImg(novaImagem);
      setIsFading(true);

      setTimeout(() => {
        setCurrentImg(novaImagem);
        setIsFading(false);
      }, 600);
    };
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      bgcolor={"background.body"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="atuacao-section" padded={true}>
        <Stack id="atuacao-title" padding={"20px"} spacing={"10px"}>
          <Typography level="title-md">{content.atuacao.title}</Typography>
        </Stack>

        <Stack
          id="atuacao-container"
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box
            ref={containerRef}
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          >
            {cards.map((c, i) => (
              <Box key={i} sx={{ height: "60vh" }}>
                <Stack
                  component={motion.div}
                  style={{ y }}
                  sx={{
                    position: "sticky",
                    top: "11dvh",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Card
                    variant="solid"
                    sx={{
                      width: "90%",
                      maxWidth: 900,
                      p: "24px",
                      bgcolor: "background.surface",
                      boxShadow: "lg",
                    }}
                  >
                    <Stack id="card-header" width={"100%"} height={"5dvh"}>
                      {c.icon}
                    </Stack>

                    <CardContent>
                      <Typography level="body-lg" fontWeight={700}>
                        {c.title}
                      </Typography>
                      <Typography level="body-md" mt={1}>
                        {c.text}
                      </Typography>
                    </CardContent>

                    <CardActions
                      sx={{
                        borderRadius: "sm",
                        justifyContent: {
                          xs: "flex-start",
                          md: "space-between",
                        },
                        padding: "20px",
                        bgcolor: "primary.400",
                      }}
                    >
                      {!isMobile && (
                        <Typography level="body-xs" sx={{ color: "#ffffff" }}>
                          {c.small}
                        </Typography>
                      )}
                    </CardActions>
                  </Card>
                </Stack>
              </Box>
            ))}
          </Box>
          {!isMobile && (
            <Stack width={"50%"} position={"sticky"} top={"11dvh"}>
              <Card
                sx={{
                  height: "50dvh",
                  boxShadow: "lg",
                  justifyContent: "flex-end",
                }}
              >
                <CardCover>
                  <img
                    src={currentImg}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      transition: "opacity 0.4s ease",
                      borderRadius: "lg",
                    }}
                  />

                  {nextImg && (
                    <img
                      src={nextImg}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "opacity 0.4s ease",
                        borderRadius: "lg",
                        opacity: isFading ? 1 : 0,
                      }}
                    />
                  )}
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
                    zIndex: "1",
                  }}
                >
                  <ConstructionIcon
                    sx={{ color: "primary.100", fontSize: "large" }}
                  />
                  <Typography level="body-md" sx={{ color: "#ffffff" }}>
                    {content.atuacao.cardPericia}
                  </Typography>
                </CardActions>
              </Card>
            </Stack>
          )}
        </Stack>
      </Section>
    </Stack>
  );
};
