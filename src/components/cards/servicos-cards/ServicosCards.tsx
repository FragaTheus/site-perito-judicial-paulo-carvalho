import { CardLayout } from "../../../layout/cards-layout/CardLayout";
import { Typography } from "@mui/joy";

type ServicoCardProps = {
  title: string;
  bodyText: string;
};

export const CardServico: React.FC<ServicoCardProps> = ({
  title,
  bodyText,
}) => {
  return (
    <CardLayout cardTitle={title} cardActionContent={true} LinkUrl="/servicos">
      <Typography level="body-md">{bodyText}</Typography>
    </CardLayout>
  );
};

export const CardServico4 = () => {
  return (
    <CardLayout
      cardTitle="Consultoria em perícias técnicas"
      cardActionContent={true}
      LinkUrl="/servicos"
    >
      <Typography level="body-md">
        Paulo presta consultoria especializada para empresas e profissionais que
        precisam aplicar ou interpretar perícias técnicas relacionadas à Saúde e
        Segurança no Trabalho. Ele auxilia na compreensão da legislação, normas
        técnicas e melhores práticas, garantindo que os procedimentos periciais
        sejam eficazes, corretos e seguros.
      </Typography>
    </CardLayout>
  );
};

export const CardServico5 = () => {
  return (
    <CardLayout
      cardTitle="Elaboração de Laudos Técnicos e Ergonômicos"
      cardActionContent={true}
      LinkUrl="/servicos"
    >
      <Typography level="body-md">
        Paulo produz laudos completos, detalhados e objetivos, com foco em
        análise técnica e conformidade legal. Ele inclui informações sobre
        riscos, causas, impactos e recomendações práticas, facilitando a tomada
        de decisão e contribuindo para a gestão de riscos e prevenção de
        acidentes no ambiente de trabalho.
      </Typography>
    </CardLayout>
  );
};

export const CardServico6 = () => {
  return (
    <CardLayout
      cardTitle="Avaliação de Máquinas conforme NR-12"
      cardActionContent={true}
      LinkUrl="/servicos"
    >
      <Typography level="body-md">
        Paulo realiza inspeções detalhadas em máquinas e equipamentos,
        verificando sua conformidade com a Norma Regulamentadora NR12, que trata
        da segurança no trabalho em máquinas e equipamentos. Ele identifica
        riscos de operação, pontos de bloqueio, proteção de partes móveis e
        sistemas de segurança, oferecendo orientações técnicas e práticas para
        adequação. Seu objetivo é garantir que as máquinas operem de forma
        segura, prevenindo acidentes e cumprindo todas as exigências legais.
      </Typography>
    </CardLayout>
  );
};

export const CardServico7 = () => {
  return (
    <CardLayout
      cardTitle="Levantamento Técnico"
      cardActionContent={true}
      LinkUrl="/servicos"
    >
      <Typography level="body-md">
        Paulo realiza levantamentos técnicos detalhados de ambientes, processos
        e equipamentos, coletando todas as informações necessárias para a
        análise de insalubridade, periculosidade, ergonomia ou segurança de
        máquinas. Esses levantamentos servem como base para a elaboração de
        laudos, relatórios e recomendações técnicas, garantindo que todas as
        decisões sejam fundamentadas em dados precisos e confiáveis.
      </Typography>
    </CardLayout>
  );
};
