import { Box, Stack, Typography } from "@mui/joy";
import { Section } from "../../components/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import content from "../../content/home-page/homePageContent.json";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import TaskIcon from "@mui/icons-material/Task";
import HandymanIcon from "@mui/icons-material/Handyman";
import { AtuacaoCard } from "../../components/AtuacaoCard";
import LayersIcon from "@mui/icons-material/Layers";

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
    img: "pericia.jpg",
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
    img: "laudos.jpg",
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
    img: "nr12.jpg",
  },
];

export const Atuacao = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

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
          padding={"20px"}
          spacing={"10px"}
          width={"100%"}
        >
          <LayersIcon
            sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 80px)" }}
          />
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
              width: "100%",
            }}
          >
            {cards.map((c, i) => (
              <Box key={i} sx={{ height: "90vh" }}>
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
                  <AtuacaoCard
                    icon={c.icon}
                    title={c.title}
                    text={c.text}
                    small={c.small}
                    imgUrl={c.img}
                  />
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>
      </Section>
    </Stack>
  );
};
