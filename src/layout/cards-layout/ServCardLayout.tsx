import { Box, Card, CardActions, CardContent, Typography } from "@mui/joy";
import { useResContext } from "../../contexts/ResponsiveContext";

interface ICardProps {
  cardTitle: string;
  cardText: string;
  cardIcon: React.ReactNode;
}

export const ServCardLayout: React.FC<ICardProps> = ({
  cardTitle,
  cardText,
  cardIcon,
}) => {
  const { isMobile } = useResContext();
  return (
    <Card id="card" variant="soft" sx={isMobile ? { gap: "0px" } : {}}>
      <Box
        id="card-header"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"center"}
        bgcolor={isMobile ? "primary.100" : "transparent"}
        sx={{
          width: "100%",
          height: "clamp(30px, 5vh, 80px)",
          borderRadius: "sm",
          paddingX: "10px",
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
            width: {
              xs: "100%",
              sm: "40%",
            },
            height: "clamp(30px, 5vh, 80px)",
          }}
        >
          <Typography
            level="body-sm"
            fontWeight={400}
            sx={{ color: "#121212" }}
          >
            {cardTitle}
          </Typography>
        </Box>
        {cardIcon}
      </Box>
      <CardContent>
        <Box
          flex={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          alignSelf={"center"}
        >
          <Typography level="body-md">{cardText}</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ height: "1vh" }} />
    </Card>
  );
};
