import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

type SobreCardProps = {
  title: string;
  subtitle: string;
  bodyText: string;
};

export const SobreCard: React.FC<SobreCardProps> = ({
  title,
  subtitle,
  bodyText,
}) => {
  return (
    <CardLayout
      imgUrl="sobre-img.jpg"
      cardTitle={title}
      LinkUrl="/Sobre"
      cardSubtitle={subtitle}
      cardActionContent={true}
    >
      <Typography level="body-md">{bodyText}</Typography>
    </CardLayout>
  );
};
