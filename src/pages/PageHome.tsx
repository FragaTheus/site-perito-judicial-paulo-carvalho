import { useTheme } from "@mui/joy";
import { Atuacao } from "../sections/home-page/Atuacao";
import { Beneficios } from "../sections/home-page/Beneficios";
import { HomeHero } from "../sections/home-page/HomeHero";
import { IntroHome } from "../sections/home-page/IntroHome";
import { useMediaQuery } from "@mui/material";
import { CtaMidSection } from "../sections/home-page/CtaMidSection";
import { Processo } from "../sections/home-page/Processo";

export const PageHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <HomeHero />
      <IntroHome />
      <Beneficios />
      <Processo />
      <Atuacao />
      {isMobile && <CtaMidSection />}
    </>
  );
};
