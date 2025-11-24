import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/joy";
import { Section } from "../../components/Section";
import content from "../../content/home-page/homePageContent.json";
import ShieldIcon from "@mui/icons-material/Shield";
import DescriptionIcon from "@mui/icons-material/Description";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BalanceIcon from "@mui/icons-material/Balance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const bCards = [
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
    icon: <SupportAgentIcon sx={{ color: "primary.100", fontSize: "lg" }} />,
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
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"background.body"}
    >
      <Section id="beneficios" padded={false}>
        <Stack padding={"20px"} spacing={"10px"}>
          <Typography level="title-md">{content.beneficios.title}</Typography>
        </Stack>

        <Box
          id="beneficios-cards"
          display={"grid"}
          width={"100%"}
          padding={"20px"}
          alignContent={"center"}
          justifyItems={"center"}
          sx={{
            gridAutoFlow: {
              xs: "column",
              sm: "initial",
            },
            gridAutoColumns: "100%",
            overflowX: "auto",
            gridTemplateColumns: {
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: "10px",
          }}
        >
          {bCards.map((c, i) => (
            <Card
              variant="solid"
              key={i}
              sx={{
                bgcolor: "background.surface",
                boxShadow: "lg",
                height: "250px",
                width: "90%",
                maxWidth: "300px",
                justifyContent: "space-evenly",
              }}
            >
              <CardActions>{c.icon}</CardActions>
              <CardContent
                sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
              >
                <Typography
                  level="body-md"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  <strong>{c.title}</strong>
                  <p>{c.text}</p>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Section>
    </Stack>
  );
};
