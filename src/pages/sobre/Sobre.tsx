import { PageLayout } from "../../layout/page-layout/PageLayout";
import { HeroSection } from "../../components/hero/HeroSection";
export const PageSobre = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Afinal, quem e Paulo de Cavalho?"
          imgUrl="intro-img-paulo-final.jpg"
        />
      }
      sections={[]}
    ></PageLayout>
  );
};
