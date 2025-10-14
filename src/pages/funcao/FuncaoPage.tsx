import { HeroSection } from "../../components/hero/HeroSection";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { PeritoEAssistente } from "../../components/perito-tecnico/PeritoEAssistente";
import { IntroFuncao } from "../../components/intro-funcao/IntroFuncao";
import { DescricaoPerito } from "../../components/cards/descricao-perito/DescricaoPerito";
import { SolicitarPerito } from "../../components/cards/solicitar-perito/SolicitarPerito";

export const FuncaoPage = () => {
  return (
    <PageLayout
      heroComponent={
        <HeroSection
          imgUrl="hero-funcao.jpeg"
          title="Qual o papel de um Perito Judicial?"
          subtitle="Engenheiro de Segurança do Trabalho | Perito Judicial"
        />
      }
      sections={[
        {
          dark: true,
          component: (
            <>
              <IntroFuncao />
            </>
          ),
        },
        {
          dark: false,
          component: (
            <>
              <DescricaoPerito />
              <SolicitarPerito />
            </>
          ),
        },

        {
          title: "Diferença entre Perito e Assistente Técnico:",
          dark: false,
          component: <PeritoEAssistente />,
        },
      ]}
    ></PageLayout>
  );
};
