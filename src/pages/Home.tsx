import { FuncaoCard } from "../components/cards/funcao-card/FuncaoCard";
import { IntroCard } from "../components/cards/intro-card/IntroCard";
import {
  CardServico,
  CardServico1,
  CardServico2,
  CardServico3,
} from "../components/cards/servicos-cards/ServicosCards";
import { SobreCard } from "../components/cards/sobre-card/SobreCard";
import { HeroSection } from "../components/hero/HeroSection";
import { PageLayout } from "../layout/page-layout/PageLayout";
import { SectionLayout } from "../layout/section-layout/SectionLayout";

export const HomePage = ({}) => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Paulo Carvaho"
          subtitle="Engenheiro de segurança do trabalho | Perito Judicial"
          description="Perícias judiciais e assistências técnicas em ações
          trabalhistas."
        />
      }
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
    >
      <>
        <SectionLayout title="Servicos prestados:" position="sticky" top={0}>
          <CardServico />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico1 />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico2 />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico3 />
        </SectionLayout>
      </>
    </PageLayout>
  );
};
