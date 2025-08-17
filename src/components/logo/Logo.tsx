import { Box, Divider, IconButton, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="header-main"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
      gap={"10px"}
    >
      <Box
        id="logo"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <IconButton
          onClick={() => {
            navigate("/");
          }}
          sx={{ color: "transparent" }}
        >
          <Typography
            level="h4"
            textAlign={"center"}
            sx={{
              color: "primary.100",
              fontFamily: '"EB Garamond", serif',
            }}
          >
            PC
          </Typography>
        </IconButton>
      </Box>
      <Divider
        orientation="vertical"
        sx={{ bgcolor: "primary.400", height: "80%", alignSelf: "center" }}
      />
      <Typography
        level="h4"
        fontFamily={'"EB Garamond", serif'}
        sx={{
          color: "#ffffff",
        }}
      >
        Paulo Carvalho
      </Typography>
    </Box>
  );
};
