import {
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
        {
          component: <QuemSouCard />,
        },
        {
          component: <FormacaoCard />,
        },
      ]}
    ></PageLayout>
  );
};
