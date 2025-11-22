import { Box, IconButton } from "@mui/joy";
import { useResContext } from "../contexts/ResponsiveContext";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const Footer = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      id="global"
      width={"100%"}
      bgcolor={"#121212"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100svh"}
      padding={"10px"}
    >
      <Box
        id="footer-header"
        width={"100%"}
        height={"10svh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        justifySelf={"center"}
      >
        <IconButton
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          <ArrowDropUpIcon sx={{ color: "primary.100" }} />
        </IconButton>
      </Box>
      <Box
        id="footer-body"
        display={"flex"}
        width={"100%"}
        flex={1}
        sx={isMobile ? { flexDirection: "column" } : {}}
      >
        <Box
          id="footer-contato"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={isMobile ? { width: "100%" } : { width: "50%" }}
        >
          Contato Form
        </Box>
        <Box
          id="footer-infos"
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Contato Info
        </Box>
      </Box>
    </Box>
  );
};
