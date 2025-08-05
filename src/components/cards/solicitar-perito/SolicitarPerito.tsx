import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const SolicitarPerito = () => {
  return (
    <>
      <CardLayout
        cardActionContent={false}
        cardTitle="Quando o perito é necessário?"
      >
        <Typography>
          A perícia técnica é solicitada quando o juiz precisa de
          esclarecimentos sobre questões que envolvem conhecimento técnico, como
          acidentes de trabalho, condições insalubres, avaliação de equipamentos
          ou ergonomia. Nestes casos, ele atua como um “tradutor técnico” do
          processo.
        </Typography>
      </CardLayout>
    </>
  );
};
