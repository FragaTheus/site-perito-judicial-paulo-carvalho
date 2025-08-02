import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const FuncaoCard = () => {
  return (
    <CardLayout
      imgUrl="funcao-img.jpg"
      cardTitle="A voz técnica no processo"
      cardSubtitle="Entenda como a perícia técnica contribui com a justiça."
      hrefScrollId="#sobre"
      cardActionContent={true}
    >
      <Typography level="body-sm">
        O perito judicial é nomeado pelo juiz para esclarecer situações
        técnicas. Atua em segurança do trabalho, avaliando riscos e acidentes.
        Seu laudo é decisivo e segue normas legais.
      </Typography>
    </CardLayout>
  );
};
