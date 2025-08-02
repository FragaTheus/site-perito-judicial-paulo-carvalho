import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useResContext } from "../../contexts/ResponsiveContext";

interface ICardProps {
  imgUrl?: string;
  cardTitle: string;
  cardText: string;
  cardActionContent: boolean;
  cardSubtitle?: string;
  hrefScrollId: string;
}

export const CardLayout: React.FC<ICardProps> = ({
  imgUrl,
  cardTitle,
  cardText,
  cardActionContent,
  cardSubtitle,
  hrefScrollId,
}) => {
  const { isMobile } = useResContext();
  const cardDirection = isMobile ? "column" : "row";
  return (
    <Card
      id="card"
      variant="soft"
      sx={isMobile ? { height: "80%", gap: "0px" } : {}}
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
        <Typography level="body-sm" fontWeight={400} sx={{ color: "#121212" }}>
          {cardTitle}
        </Typography>
      </Box>
      <CardContent>
        <Box
          flex={1}
          display={"flex"}
          alignItems={"center"}
          flexDirection={cardDirection}
          alignSelf={"center"}
          gap={"20px"}
        >
          <Typography level="body-md" sx={{ flex: 1 }}>
            {cardText}
          </Typography>
          {imgUrl && (
            <Box id="img" sx={{ width: "clamp(180px,33vw,800px)" }}>
              <AspectRatio ratio={"16/9"}>
                <img
                  src={imgUrl}
                  style={{ objectFit: "cover", objectPosition: "center 75%" }}
                ></img>
              </AspectRatio>
            </Box>
          )}
        </Box>
      </CardContent>
      {cardActionContent ? (
        <CardActions>
          {!isMobile && (
            <Typography level="body-sm" sx={{ color: "#ffffff" }}>
              {cardSubtitle}
            </Typography>
          )}
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={isMobile ? { width: "100%" } : { width: "40%" }}
          >
            <a href="#contato">
              <Button id="contato-button" variant="solid">
                <Typography level="body-sm" sx={{ color: "#ffffff" }}>
                  Entrar em contato
                </Typography>
              </Button>
            </a>
            <Button
              id="section-button"
              component="a"
              href={hrefScrollId}
              variant="plain"
              sx={{ width: "30%" }}
            >
              <Typography
                level="body-sm"
                textAlign={"center"}
                sx={{ color: "primary.100" }}
              >
                Ver mais
              </Typography>
              <KeyboardArrowRight />
            </Button>
          </Box>
        </CardActions>
      ) : (
        <CardActions sx={{ height: "1svh" }} />
      )}
    </Card>
  );
};
