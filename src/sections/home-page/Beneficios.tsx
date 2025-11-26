import { Box, Stack, Typography, useTheme } from "@mui/joy";
import { Section } from "../../components/Section";
import content from "../../content/home-page/homePageContent.json";
import ShieldIcon from "@mui/icons-material/Shield";
import DescriptionIcon from "@mui/icons-material/Description";
import GavelIcon from "@mui/icons-material/Gavel";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import BalanceIcon from "@mui/icons-material/Balance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { BenfictsCards } from "../../components/BeneficsCard";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ListIcon from "@mui/icons-material/List";

const benfictsCardValue = [
  {
    icon: <ShieldIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item,
    text: content.beneficios.card.itemPt2,
  },
  {
    icon: <DescriptionIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item1,
    text: content.beneficios.card.item1pt2,
  },
  {
    icon: <GavelIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item2,
    text: content.beneficios.card.item2pt2,
  },
  {
    icon: <FactCheckIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item3,
    text: content.beneficios.card.item3pt2,
  },
  {
    icon: <BalanceIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item4,
    text: content.beneficios.card.item4pt2,
  },
  {
    icon: <VerifiedUserIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
    title: content.beneficios.card.item5,
    text: content.beneficios.card.item5pt2,
  },
];

export const Beneficios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"background.body"}
    >
      <Section id="beneficios" padded={false}>
        <Stack padding={"20px"} spacing={"10px"} width={"100%"}>
          <ListIcon
            sx={{
              color: "primary.100",
              fontSize: "clamp(20px,10vw,80px)",
            }}
          />
          <Typography level="title-md">{content.beneficios.title}</Typography>
        </Stack>
        {isMobile ? (
          <Box overflow={"hidden"} width={"100%"}>
            <Swiper
              style={
                {
                  paddingBottom: "40px",
                  "--swiper-pagination-color":
                    theme.colorSchemes.light.palette.primary[100],
                  "--swiper-pagination-bullet-inactive-color":
                    theme.colorSchemes.light.palette.primary[500],
                } as React.CSSProperties
              }
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {benfictsCardValue.map((c, i) => (
                <SwiperSlide key={i}>
                  <BenfictsCards
                    key={i}
                    icon={c.icon}
                    title={c.title}
                    text={c.text}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ) : (
          <Box
            id="beneficios-cards"
            display={"grid"}
            width={"100%"}
            padding={"20px"}
            alignContent={"center"}
            justifyItems={"center"}
            sx={{
              gridAutoColumns: "100%",
              gridTemplateColumns: {
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: "10px",
            }}
          >
            {benfictsCardValue.map((c, i) => (
              <BenfictsCards
                key={i}
                icon={c.icon}
                title={c.title}
                text={c.text}
              />
            ))}
          </Box>
        )}
      </Section>
    </Stack>
  );
};
