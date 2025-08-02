import { Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const QuemSouCard = () => {
  return (
    <CardLayout
      cardTitle="Paulo Carvalho"
      imgUrl="intro-img-paulo-final.jpg"
      cardActionContent={false}
    >
      <Typography level="body-md">
        Olá, sou Paulo de Carvalho Pereira, engenheiro de segurança do trabalho
        e engenheiro ambiental, atuando há mais de 20 anos na área de segurança
        do trabalho. Atualmente, sou perito judicial, prestando serviços
        técnicos especializados que auxiliam a Justiça na tomada de decisões em
        processos que envolvem questões técnicas e ambientais. Minha atuação é
        pautada pela imparcialidade, ética e precisão técnica, com foco em
        oferecer análises claras, objetivas e embasadas.
      </Typography>
    </CardLayout>
  );
};

export const FormacaoCard = () => {
  return (
    <CardLayout cardTitle="Formação Acadêmica" cardActionContent={false}>
      <Typography level="body-md">
        Sou formado em: Engenharia de Segurança do Trabalho Engenharia Ambiental
        Essas formações me permitem atuar com um olhar técnico e abrangente
        sobre as condições de trabalho, riscos ocupacionais e impactos
        ambientais, fornecendo subsídios confiáveis tanto em perícias como em
        consultorias.
      </Typography>
    </CardLayout>
  );
};
