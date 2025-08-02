import { FuncaoCard } from "../components/cards/funcao-card/FuncaoCard";
import { IntroCard } from "../components/cards/intro-card/IntroCard";
import { SobreCard } from "../components/cards/sobre-card/SobreCard";
import { HeroContent } from "../components/hero/HeroContent";
import { PageLayout } from "../layout/page-layout/PageLayout";

export const HomePage = () => {
  return (
    <PageLayout
      heroComponent={<HeroContent />}
      sections={[
        {
          title: "Precisa de um especialista para sua pericia?",
          component: <IntroCard />,
        },
        {
          title: "Qual a funcao de um perito judicial?",
          component: <FuncaoCard />,
        },
        {
          title: "Afinal, quem e Paulo Carvalho?",
          component: <SobreCard />,
        },
      ]}
    />
  );
};
