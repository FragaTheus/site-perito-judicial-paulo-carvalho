import { Box, IconButton } from "@mui/joy";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { FooterInfo } from "./FooterInfo";

export const Footer = () => {
  return (
    <Box
      id="global"
      width={"100%"}
      bgcolor={"#121212"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
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
      <Box id="footer-body" display={"flex"} width={"100%"} flex={1}>
        <Box
          id="footer-infos"
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FooterInfo />
        </Box>
      </Box>
    </Box>
  );
};
