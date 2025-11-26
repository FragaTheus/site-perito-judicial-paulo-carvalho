import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import type React from "react";

type AtuacaoCardProp = {
  icon: React.ReactNode;
  title: string;
  text: string;
  small: string;
  imgUrl: string;
};

export const AtuacaoCard = (type: AtuacaoCardProp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      variant="solid"
      sx={{
        width: "100%",
        maxWidth: 1250,
        p: "24px",
        bgcolor: "background.surface",
        boxShadow: "lg",
      }}
    >
      <Stack id="card-header" width={"100%"} height={"5dvh"}>
        {type.icon}
      </Stack>

      <CardContent>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          flex={1}
          gap={"10px"}
        >
          <Stack justifyContent={"space-evenly"}>
            <Typography level="body-lg" fontWeight={700}>
              {type.title}
            </Typography>
            <Typography level="body-md" mt={1}>
              {type.text}
            </Typography>
          </Stack>

          <Stack>
            <img src={type.imgUrl} style={{ borderRadius: "5px" }}></img>
          </Stack>
        </Box>
      </CardContent>

      <CardActions
        sx={{
          borderRadius: "sm",
          justifyContent: {
            xs: "flex-start",
            md: "space-between",
          },
          padding: "20px",
          bgcolor: "primary.400",
        }}
      >
        {!isMobile && (
          <Typography level="body-xs" sx={{ color: "#ffffff" }}>
            {type.small}
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};
