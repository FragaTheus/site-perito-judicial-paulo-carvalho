import { CardServico } from "../../components/cards/servicos-cards/ServicosCards";
import { HeroSection } from "../../components/hero/HeroSection";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { SectionLayout } from "../../layout/section-layout/SectionLayout";
import content from "../../content/home-page/homePageContent.json";
import { useResContext } from "../../contexts/ResponsiveContext";
import { IntroHome } from "../../sections/home-page/IntroHome";
import { Beneficios } from "../../sections/home-page/Beneficios";
import { Sobre } from "../../sections/home-page/Sobre";

export const HomePage = ({}) => {
  const { isMobile } = useResContext();
  const sections = [];

  isMobile && sections.push();
  sections.push({
    divId: "funcao",
    title: content.intro.title,
    dark: true,
    component: <IntroHome />,
  });

  sections.push({
    divId: "beneficios",
    title: content.beneficios.title,
    dark: false,

    component: <Beneficios />,
  });

  sections.push({
    divId: "sobre",
    title: content.sobre.title,
    dark: false,

    component: <Sobre />,
  });

  const servicosCards = [
    {
      title: content.servicos.cardsContent.title,
      bodyText: content.servicos.cardsContent.bodyText,
    },
    {
      title: content.servicos.cardsContent1.title,
      bodyText: content.servicos.cardsContent1.bodyText,
    },
    {
      title: content.servicos.cardsContent2.title,
      bodyText: content.servicos.cardsContent2.bodyText,
    },
  ];

  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          description={content.hero.description}
          imgUrl="hero-home.jpg"
        />
      }
      sections={sections}
    >
      {servicosCards.map((sc, i) => (
        <SectionLayout
          key={i}
          divId={i === 0 ? "servico" : ""}
          title={i === 0 ? content.servicos.title : null}
          position="sticky"
          top={0}
        >
          <CardServico title={sc.title} bodyText={sc.bodyText} />
        </SectionLayout>
      ))}
    </PageLayout>
  );
};
