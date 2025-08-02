import {
  ExperienciaCard,
  FormacaoCard,
  QuemSouCard,
} from "../../components/cards/page-sobre-cards/PageSobreCards";
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
        { title: "Afinal, quem e Paulo Carvalho?", component: <QuemSouCard /> },
        {
          component: <FormacaoCard />,
        },
        {
          component: <ExperienciaCard />,
        },
        {
          component: <FormacaoCard />,
        },
      ]}
    ></PageLayout>
  );
};
