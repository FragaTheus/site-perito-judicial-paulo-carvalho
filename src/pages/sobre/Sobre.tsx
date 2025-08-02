import { QuemSouCard } from "../../components/cards/quem-sou-card/QuemSou";
import { HeroSection } from "../../components/hero/HeroSection";
import { PageLayout } from "../../layout/page-layout/PageLayout";

export const PageSobre = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Sobre Paulo Carvalho"
          subtitle="Afinal, quem e Paulo Carvalho?"
        />
      }
      sections={[
        {
          title: "Quem sou eu?",
          component: <QuemSouCard />,
        },
        {
          component: <QuemSouCard />,
        },
      ]}
    ></PageLayout>
  );
};
