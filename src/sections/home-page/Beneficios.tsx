import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/joy";
import content from "../../content/home-page/homePageContent.json";
import { useResContext } from "../../contexts/ResponsiveContext";
import GavelIcon from "@mui/icons-material/Gavel";
import DescriptionIcon from "@mui/icons-material/Description";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AssistantIcon from "@mui/icons-material/Assistant";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const beneficioCards = [
  {
    title: "Proteção Jurídica",
    text: content.beneficios.card.item,
    icon: <GavelIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
  {
    title: "Laudos Confiáveis",
    text: content.beneficios.card.item1,
    icon: <DescriptionIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
  {
    title: "Redução de Riscos",
    text: content.beneficios.card.item2,
    icon: <WarningAmberIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
  {
    title: "Acompanhamento Completo",
    text: content.beneficios.card.item3,
    icon: <AssistantIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
  {
    title: "Decisões Seguras",
    text: content.beneficios.card.item4,
    icon: <SecurityIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
  {
    title: "Credibilidade Garantida",
    text: content.beneficios.card.item5,
    icon: <VerifiedUserIcon fontSize="small" sx={{ color: "primary.100" }} />,
  },
];

export const Beneficios = () => {
  const { isMobile, isTablet } = useResContext();
  return (
    <Stack
      alignItems={"flex-start"}
      width={isMobile ? "100%" : "80%"}
      spacing={"30px"}
    >
      <Stack
        width={isMobile ? "80%" : "100%"}
        alignSelf={isMobile ? "center" : ""}
      >
        <Typography level="body-lg">{content.beneficios.text}</Typography>
      </Stack>
      <Box
        width={"100%"}
        alignItems={"center"}
        justifyItems={"center"}
        display={"grid"}
        overflow={"auto"}
        sx={
          isMobile
            ? {
                gridAutoFlow: "column",
                gridAutoColumns: "280px",
              }
            : isTablet
            ? { gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }
            : {
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }
        }
      >
        {beneficioCards.map((c, i) => (
          <Card
            key={i}
            variant="solid"
            sx={
              isMobile
                ? {
                    height: "250px",
                    bgcolor: "background.surface",
                    boxShadow: "lg",
                    borderColor: "text.primary",
                  }
                : {
                    height: "350px",
                    bgcolor: "background.surface",
                    boxShadow: "lg",
                    borderColor: "text.primary",
                  }
            }
          >
            <Stack
              alignSelf={"flex-start"}
              height={"12%"}
              width={"100%"}
              borderRadius={"sm"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              <SvgIcon>{c.icon}</SvgIcon>
            </Stack>

            <CardContent
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Typography
                level="body-sm"
                fontWeight={600}
                sx={{ color: "text.primary" }}
              >
                {c.title}
              </Typography>
              <Typography level="body-sm">{c.text}</Typography>
            </CardContent>
            <CardActions />
          </Card>
        ))}
      </Box>
    </Stack>
  );
};
