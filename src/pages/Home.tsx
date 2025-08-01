import { ContatoCard } from "../components/cards/contato-card/ContatoCard";
import { FuncaoCard } from "../components/cards/funcao-card/FuncaoCard";
import { IntroCard } from "../components/cards/intro-card/IntroCard";
import {
  CardServico,
  CardServico1,
  CardServico2,
  CardServico3,
} from "../components/cards/servicos-cards/ServicosCards";
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
        {
          title: "Servicos prestados:",
          position: "sticky",
          top: 0,
          component: <CardServico />,
        },
        {
          component: <CardServico1 />,
        },
        {
          component: <CardServico2 />,
        },
        {
          component: <CardServico3 />,
        },
        {
          title: "Entre em contato conosco:",
          component: <ContatoCard />,
        },
      ]}
    />
  );
};
