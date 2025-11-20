import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

type FuncaoCardProps = {
  title: string;
  subtitle: string;
  bodyText: string;
};

export const FuncaoCard: React.FC<FuncaoCardProps> = ({
  title,
  subtitle,
  bodyText,
}) => {
  return (
    <CardLayout
      imgUrl="funcao-img.jpg"
      cardTitle={title}
      cardSubtitle={subtitle}
      cardActionContent={true}
      LinkUrl="/Funcao"
    >
      <Typography level="body-md"></Typography>
      {bodyText}
    </CardLayout>
  );
};
