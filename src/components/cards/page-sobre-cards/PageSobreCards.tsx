import { Box, Typography } from "@mui/joy";
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
    <CardLayout
      cardTitle="Formação Acadêmica"
      cardActionContent={false}
      imgUrl="sobre-paulo.jpeg"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography level="body-md">Formado em:</Typography>
        <Typography level="body-md">-Engenharia Ambiental</Typography>
        <Typography level="body-md">
          -Engenharia de Segurança do Trabalho
        </Typography>
        <Typography level="body-md">
          Essas formações me permitem atuar com um olhar técnico e abrangente
          sobre as condições de trabalho, riscos ocupacionais e impactos
          ambientais, fornecendo subsídios confiáveis tanto em perícias como em
          consultorias.
        </Typography>
      </Box>
    </CardLayout>
  );
};
