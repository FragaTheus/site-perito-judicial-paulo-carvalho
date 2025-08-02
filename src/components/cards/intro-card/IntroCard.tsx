import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";
import GavelIcon from "@mui/icons-material/Gavel";

export const IntroCard = () => {
  return (
    <CardLayout
      imgUrl="intro-img-paulo-final.jpg"
      cardTitle="Perícia com confiança"
      cardIcon={<GavelIcon sx={{ color: "#121212", fontSize: "body-lg" }} />}
      cardSubtitle="Fale com um especialista e tire suas dúvidas."
      cardActionContent={true}
      hrefScrollId="#funcao"
    >
      <Typography level="body-md">
        Paulo Carvalho é perito judicial com mais de 20 anos de experiência.
        Atua com ética e precisão em casos de saúde e segurança. É referência no
        meio jurídico pela qualidade dos seus laudos técnicos.
      </Typography>
    </CardLayout>
  );
};
