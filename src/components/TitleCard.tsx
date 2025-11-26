import { Card, CardContent, Typography } from "@mui/joy";

type TitleCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  complement: string;
};

export const TitleCard = (type: TitleCardProps) => {
  return (
    <Card
      variant="solid"
      sx={{
        bgcolor: "background.surface",
        height: "100%",
        boxShadow: "lg",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        {type.icon}
        <Typography level="title-md">
          <p>{type.title}</p>
        </Typography>
        <Typography level="body-md">
          <p>{type.text}</p>
          <p>{type.complement}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};
