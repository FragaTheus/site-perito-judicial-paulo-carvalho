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
import type React from "react";

interface ICardProps {
  imgUrl?: string;
  cardTitle: string;
  cardIcon?: React.ReactNode;
  cardActionContent: boolean;
  cardSubtitle?: string;
  hrefScrollId?: string;
  children: React.ReactNode;
}

export const CardLayout: React.FC<ICardProps> = ({
  imgUrl,
  cardTitle,
  cardIcon,
  cardActionContent,
  cardSubtitle,
  hrefScrollId,
  children,
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
        {cardIcon && cardIcon}
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
          <Box flex={1}>{children}</Box>
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
            sx={
              isMobile
                ? { width: "100%" }
                : { width: "40%", marginRight: "-60px" }
            }
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
