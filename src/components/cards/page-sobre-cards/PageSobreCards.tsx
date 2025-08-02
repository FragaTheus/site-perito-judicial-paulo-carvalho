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

export const ExperienciaCard = () => {
  return (
    <CardLayout cardTitle="Experiência Profissional" cardActionContent={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography level="body-md" textAlign={"center"}>
          Atuo há duas décadas na área de segurança do trabalho, com passagem
          por diferentes setores como:
        </Typography>
        <Typography textAlign={"left"}>-Construção civil</Typography>
        <Typography>-Indústrias metalúrgicas</Typography>
        <Typography>-Indústrias químicas</Typography>
        <Typography>-Setor de telecomunicações</Typography>
        <Typography>-Indústria alimentícia</Typography>
        <Typography>
          Nos últimos 10 anos, venho atuando como perito judicial junto às
          varas:
        </Typography>
        <Typography>-1ª Vara de Mogi das Cruzes/SP</Typography>
        <Typography>-3ª Vara de São José dos Campos/SP</Typography>
      </Box>
    </CardLayout>
  );
};
