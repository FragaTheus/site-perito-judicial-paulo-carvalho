import { Atuacao } from "../sections/home-page/Atuacao";
import { Beneficios } from "../sections/home-page/Beneficios";
import { CTA } from "../sections/home-page/Cta";
import { HomeHero } from "../sections/home-page/HomeHero";
import { IntroHome } from "../sections/home-page/IntroHome";
import { Processo } from "../sections/home-page/Processo";
import { Sobre } from "../sections/home-page/Sobre";

export const PageHome = () => {
  return (
    <>
      <HomeHero />
      <IntroHome />
      <Beneficios />
      <Processo />
      <Atuacao />
      <Sobre />
      <CTA />
    </>
  );
};
