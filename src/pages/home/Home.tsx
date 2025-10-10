import { FuncaoCard } from "../../components/cards/funcao-card/FuncaoCard";
import {
  CardServico1,
  CardServico2,
  CardServico3,
} from "../../components/cards/servicos-cards/ServicosCards";
import { SobreCard } from "../../components/cards/sobre-card/SobreCard";
import { HeroSection } from "../../components/hero/HeroSection";
import { IntroHome } from "../../components/intro-home/IntroHome";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { SectionLayout } from "../../layout/section-layout/SectionLayout";

export const HomePage = ({}) => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Paulo Carvaho"
          subtitle="Engenheiro de segurança do trabalho | Perito Judicial"
          description="Perícias judiciais e assistências técnicas em ações
          trabalhistas."
          imgUrl="hero-home.jpg"
        />
      }
      sections={[
        {
          dark: false,
          component: <IntroHome />,
        },
        {
          divId: "funcao",
          title: "Qual é a função de um perito judicial?",
          dark: false,
          component: <FuncaoCard />,
        },
        {
          divId: "sobre",
          title: "Afinal, quem é Paulo Carvalho?",
          dark: false,

          component: <SobreCard />,
        },
      ]}
    >
      <>
        <SectionLayout
          divId={"servico"}
          title="Áreas de atuação:"
          position="sticky"
          top={0}
        >
          <CardServico1/>
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
