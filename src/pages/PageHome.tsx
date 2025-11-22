import { Beneficios } from "../sections/home-page/Beneficios";
import { HomeHero } from "../sections/home-page/HomeHero";
import { IntroHome } from "../sections/home-page/IntroHome";

export const PageHome = () => {
  return (
    <>
      <HomeHero />
      <IntroHome />
      <Beneficios />
    </>
  );
};
