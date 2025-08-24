import { AreaAtuacao } from "../../components/area-atuacao/AreaAtuacao";
import { HeroSection } from "../../components/hero/HeroSection";
import { IntroServicos } from "../../components/intro-servicos/IntroServicos";
import { PageLayout } from "../../layout/page-layout/PageLayout";

export const PageServicos = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          imgUrl="hero-home.jpg"
          title="Áreas de atuação"
          description="Engenheiro de segurança do trabalho | Perito Judicial"
        ></HeroSection>
      }
      sections={[
        {
          dark: false,
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
    ></PageLayout>
  );
};
