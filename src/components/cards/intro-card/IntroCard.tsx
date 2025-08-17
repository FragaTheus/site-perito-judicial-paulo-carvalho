import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import type React from "react";

type IntroCardProps = {
  cardTitle: String;
  text: String;
  path: String;
};

export const IntroCard: React.FC<IntroCardProps> = ({
  cardTitle,
  text,
  path,
}) => {
  return (
    <Card
      variant="soft"
      sx={{
        position: "sticky",
        width: "clamp(250px, 25vw, 800px)",
        height: "clamp(250px, 40svh, 600px)",
        flexShrink: 0,
      }}
    >
      <Box
        id="card-title-box"
        bgcolor={"primary.100"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"sm"}
        sx={{
          height: "clamp(30px, 5vh, 80px)",
        }}
      >
        <Typography level="body-md" fontWeight={400} sx={{ color: "#121212" }}>
          {cardTitle}
        </Typography>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          padding: "10px",
        }}
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="solid"
          component="a"
          href={path as any}
          sx={{ bgcolor: "transparent" }}
        >
          <Typography level="body-md" sx={{ color: "primary.100" }}>
            Saiba mais
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
