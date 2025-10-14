import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const SobreCard = () => {
  return (
    <CardLayout
      imgUrl="sobre-img.jpg"
      cardTitle=" Sobre Paulo Carvalho"
      LinkUrl="/Sobre"
      cardSubtitle="Conheça a trajetória por trás da experiência."
      cardActionContent={true}
    >
      <Typography level="body-md">
        Paulo Carvalho é Engenheiro de Segurança do Trabalho e Engenheiro Ambiental, com 20 anos de
        experiência. Atua como Perito Judicial há 10 anos nas Varas de Mogi e
        São José, com precisão em laudos técnicos.
      </Typography>
    </CardLayout>
  );
};
