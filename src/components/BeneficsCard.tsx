import { Card, CardActions, CardContent, Typography } from "@mui/joy";

type BenefictsCardsProps = {
  key: number;
  icon: React.ReactNode;
  title: string;
  text: string;
};

export const BenfictsCards = (prop: BenefictsCardsProps) => {
  return (
    <Card
      variant="solid"
      key={prop.key}
      sx={{
        bgcolor: "background.surface",
        boxShadow: "lg",
        height: "250px",
        width: "90%",
        maxWidth: "300px",
        margin: "0 auto",
        justifyContent: "space-evenly",
      }}
    >
      <CardActions>{prop.icon}</CardActions>
      <CardContent
        sx={{ alignItems: "flex-start", justifyContent: "space-evenly" }}
      >
        <Typography
          level="body-md"
          sx={{
            color: "text.primary",
          }}
        >
          <strong>{prop.title}</strong>
          <p>{prop.text}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};
