import { Box } from "@mui/joy";
import { ContatoForm } from "../contato/contato-form/ContatoForm";
import { ContatoInfos } from "../contato/contato-infos/ContatoInfos";
import { Logo } from "../logo/Logo";
import { useResContext } from "../../contexts/ResponsiveContext";

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
      <Box id="footer-header" width={"100%"} height={"10svh"}>
        <Logo />
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
          <ContatoForm />
        </Box>
        <Box
          id="footer-infos"
          flex={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ContatoInfos />
        </Box>
      </Box>
    </Box>
  );
};
