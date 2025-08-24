import { HeroSection } from "../../components/hero/HeroSection";
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
          title: "Experiência e Atuação Judicial",
          component: <></>,
        },
      ]}
    ></PageLayout>
  );
};
