import { AreaAtuacao } from "../../components/area-atuacao/AreaAtuacao";
import {
  CardServico4,
  CardServico5,
  CardServico6,
  CardServico7,
} from "../../components/cards/servicos-cards/ServicosCards";
import { HeroSection } from "../../components/hero/HeroSection";
import { IntroServicos } from "../../components/intro-servicos/IntroServicos";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { SectionLayout } from "../../layout/section-layout/SectionLayout";

export const PageServicos = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          imgUrl="hero-home.jpg"
          title="Áreas de atuação"
          subtitle="Engenheiro de Segurança do Trabalho | Perito Judicial"
        ></HeroSection>
      }
      sections={[
        {
          dark: true,
          component: (
            <>
              <IntroServicos />
            </>
          ),
        },
        {
          dark: false,
          title: "Locais de Atuação Judicial",
          component: <AreaAtuacao />,
        },
      ]}
    >
      <>
        <SectionLayout position="sticky" top={0}>
          <CardServico4 />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico5 />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico6 />
        </SectionLayout>
        <SectionLayout position="sticky" top={0}>
          <CardServico7 />
        </SectionLayout>
      </>
    </PageLayout>
  );
};
