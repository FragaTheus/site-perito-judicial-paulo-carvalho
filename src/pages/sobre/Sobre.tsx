import { PageLayout } from "../../layout/page-layout/PageLayout";
import { HeroSection } from "../../components/hero/HeroSection";
import { ExperienciaCard } from "../../components/cards/experiencia/Experiencia";
import { SobreIntro } from "../../components/sobre-intro/SobreIntro";
import { Formacao } from "../../components/cards/formacao/Formacao";
import { MisaoVisaoValores } from "../../components/mvv/Mvv";

export const PageSobre = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title="Afinal, quem e Paulo de Cavalho?"
          subtitle="Engenheiro de segurança do trabalho | Perito Judicial"
          imgUrl="hero-sobre.jpg"
        />
      }
      sections={[
        {
          dark: true,
          component: <SobreIntro />,
        },
        {
          dark: false,
          component: (
            <>
              <ExperienciaCard />
              <Formacao />
            </>
          ),
        },
        {
          dark: false,
          component: <MisaoVisaoValores />,
        },
      ]}
    ></PageLayout>
  );
};
