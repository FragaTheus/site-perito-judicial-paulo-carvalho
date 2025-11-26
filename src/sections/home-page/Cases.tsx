import { Stack, Typography, useTheme } from "@mui/joy";
import { MyMarquee } from "../../components/Marquee";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useMediaQuery } from "@mui/material";

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{
        width: "100%",
        bgcolor: "background.surface",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        width={"100%"}
        maxWidth={"1400px"}
        direction={isMobile ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={"50px"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <WorkspacePremiumIcon
            sx={{ color: "primary.100", fontSize: "clamp(20px, 10vw, 80px)" }}
          />
          <Typography level="body-md">Organizações Atendidas</Typography>
        </Stack>

        <MyMarquee />
      </Stack>
    </Stack>
  );
};
