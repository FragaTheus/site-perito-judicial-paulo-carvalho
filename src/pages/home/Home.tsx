import { FuncaoCard } from "../../components/cards/funcao-card/FuncaoCard";
import { CardServico } from "../../components/cards/servicos-cards/ServicosCards";
import { SobreCard } from "../../components/cards/sobre-card/SobreCard";
import { HeroSection } from "../../components/hero/HeroSection";
import { IntroHome } from "../../components/intro-home/IntroHome";
import { PageLayout } from "../../layout/page-layout/PageLayout";
import { SectionLayout } from "../../layout/section-layout/SectionLayout";
import homePageContent from "../../content/home-page/homePageContent.json";
import { useResContext } from "../../contexts/ResponsiveContext";

const cardsContent = [
  {
    title: homePageContent.intro.cardProps.title,
    text: homePageContent.intro.cardProps.text,
    path: homePageContent.intro.cardProps.path,
  },
  {
    title: homePageContent.intro.cardProps1.title,
    text: homePageContent.intro.cardProps1.text,
    path: homePageContent.intro.cardProps1.path,
  },
  {
    title: homePageContent.intro.cardProps2.title,
    text: homePageContent.intro.cardProps2.text,
    path: homePageContent.intro.cardProps2.path,
  },
];

export const HomePage = ({}) => {
  const { isMobile } = useResContext();
  const sections = [];

  isMobile && sections.push();
  sections.push({
    divId: "funcao",
    title: homePageContent.funcao.title,
    dark: false,
    component: (
      <FuncaoCard
        title={homePageContent.funcao.card.title}
        subtitle={homePageContent.funcao.card.subtitle}
        bodyText={homePageContent.funcao.card.bodyText}
      />
    ),
  });
  sections.push({
    divId: "sobre",
    title: homePageContent.sobre.title,
    dark: false,

    component: (
      <SobreCard
        title={homePageContent.sobre.card.title}
        subtitle={homePageContent.sobre.card.subtitle}
        bodyText={homePageContent.sobre.card.bodyText}
      />
    ),
  });

  const servicosCards = [
    {
      title: homePageContent.servicos.cardsContent.title,
      bodyText: homePageContent.servicos.cardsContent.bodyText,
    },
    {
      title: homePageContent.servicos.cardsContent1.title,
      bodyText: homePageContent.servicos.cardsContent1.bodyText,
    },
    {
      title: homePageContent.servicos.cardsContent2.title,
      bodyText: homePageContent.servicos.cardsContent2.bodyText,
    },
  ];

  return (
    <PageLayout
      heroComponent={
        <HeroSection
          title={homePageContent.hero.title}
          subtitle={homePageContent.hero.subtitle}
          description={homePageContent.hero.description}
          imgUrl="hero-home.jpg"
        />
      }
      sections={sections}
    >
      {servicosCards.map((sc, i) => (
        <SectionLayout
          key={i}
          divId={i === 0 ? "servico" : ""}
          title={i === 0 ? homePageContent.servicos.title : null}
          position="sticky"
          top={0}
        >
          <CardServico title={sc.title} bodyText={sc.bodyText} />
        </SectionLayout>
      ))}
    </PageLayout>
  );
};
