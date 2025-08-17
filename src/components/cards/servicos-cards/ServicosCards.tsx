import { CardLayout } from "../../../layout/cards-layout/CardLayout";
import { Typography } from "@mui/joy";

export const CardServico = () => {
  return (
    <CardLayout
      cardTitle="Perícia técnica trabalhista"
      cardActionContent={true}
    >
      <Typography level="body-md">
        Realização de vistorias técnicas em locais de trabalho para analisar
        condições ambientais, operacionais e organizacionais. O serviço envolve
        a coleta de evidências fotográficas, análise documental, entrevistas com
        colaboradores e aplicação de normas legais para apurar a existência ou
        não de insalubridade, periculosidade, nexo causal em acidentes de
        trabalho e inconformidades ergonômicas. Ao final, é emitido um laudo
        técnico detalhado.
      </Typography>
    </CardLayout>
  );
};

export const CardServico1 = () => {
  return (
    <CardLayout cardTitle="Laudo e parecer técnico" cardActionContent={true}>
      <Typography level="body-md">
        Elaboração de documentos técnicos com base em normas regulamentadoras,
        evidências físicas, registros e documentos apresentados. O serviço
        compreende a análise criteriosa de situações específicas — como
        acidentes, condições de trabalho ou equipamentos — e a produção de um
        laudo ou parecer com conclusão objetiva, que pode ser utilizado em
        processos judiciais, administrativos ou para tomada de decisões internas
        nas empresas.
      </Typography>
    </CardLayout>
  );
};

export const CardServico2 = () => {
  return (
    <CardLayout
      cardTitle="Avaliação de máquina e NR-12"
      cardActionContent={true}
    >
      <Typography level="body-md">
        Inspeção completa de máquinas e equipamentos conforme os critérios
        estabelecidos pela NR-12. O serviço envolve a verificação de proteções
        físicas, sistemas de segurança, comandos operacionais, sinalização,
        layout, acessos e manutenções. Ao final, é produzido um relatório
        técnico com a identificação de falhas, riscos de acidentes, itens fora
        de conformidade e orientações para adequação à legislação vigente.
      </Typography>
    </CardLayout>
  );
};

export const CardServico3 = () => {
  return (
    <CardLayout cardTitle="Levantamento técnico" cardActionContent={true}>
      <Typography level="body-md">
        Mapeamento detalhado das condições do ambiente de trabalho com foco na
        identificação de riscos ocupacionais. O serviço inclui a coleta de dados
        qualitativos e quantitativos, aplicação de checklists normativos,
        medições ambientais (quando aplicável) e análise de fatores físicos,
        químicos, biológicos e ergonômicos. Os dados levantados servem de base
        para ações de prevenção, correção ou regularização junto a órgãos
        fiscalizadores.s
      </Typography>
    </CardLayout>
  );
};
