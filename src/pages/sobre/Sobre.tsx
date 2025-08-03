import { PageLayout } from "../../layout/page-layout/PageLayout";
import { HeroSection } from "../../components/hero/HeroSection";
export const PageSobre = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Afinal, quem e Paulo de Cavalho?"
          subtitle="Engenheiro de segurança do trabalho | Perito Judicial"
          imgUrl="sobre-img.jpg"
        />
      }
      sections={[]}
    ></PageLayout>
  );
};
