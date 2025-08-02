import { Box } from "@mui/joy";
import { ContatoForm } from "../contato/contato-form/ContatoForm";
import { ContatoInfos } from "../contato/contato-infos/ContatoInfos";
import { Logo } from "../logo/Logo";

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
    >
      <Box id="footer-header" width={"80%"} height={"10svh"} mt={"20px"}>
        <Logo />
      </Box>
      <Box id="footer-body" width={"100%"} display={"flex"} height={"90svh"}>
        <Box
          id="footer-contato"
          width={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
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
