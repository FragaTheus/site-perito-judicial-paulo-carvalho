import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { Section } from "../../components/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CtaMid } from "../../components/CtaMid";
import content from "../../content/home-page/homePageContent.json";
import { CardActions, useMediaQuery } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const cards = [
  {
    title: content.atuacao.card1.title,
    text: content.atuacao.card1.text,
    small: content.atuacao.card1.small,
  },
  {
    title: content.atuacao.card2.title,
    text: content.atuacao.card2.text,
    small: content.atuacao.card2.small,
  },
  {
    title: content.atuacao.card3.title,
    text: content.atuacao.card3.text,
    small: content.atuacao.card3.small,
  },
  {
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
        <Stack
          id="atuacao-title"
          alignItems={"flex-start"}
          padding={"20px"}
          spacing={"10px"}
        >
          <Typography level="title-md" sx={{ color: "primary.100" }}>
            {content.atuacao.title}
          </Typography>
          <Typography level="body-md">{content.atuacao.description}</Typography>
        </Stack>
        <Stack
          id="atuacao-container"
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          {!isMobile && (
            <Stack width={"50%"} position={"sticky"} top={"11dvh"}>
              <CtaMid />
            </Stack>
          )}

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
                    <CardContent>
                      <Typography level="body-lg" sx={{ color: "primary.100" }}>
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
                        bgcolor: {
                          xs: "transparent",
                          md: "primary.400",
                        },
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
        </Stack>
      </Section>
    </Stack>
  );
};

{
  /*
  EM breve
                      <Button    
                        variant="outlined"
                        sx={{ color: { xs: "text.primary", md: "#ffffff" } }}
                      >
                        Saiba mais
                        <KeyboardArrowRight />
                      </Button>
  */
}
