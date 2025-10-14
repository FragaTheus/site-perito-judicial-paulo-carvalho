import { Box, FormLabel, Typography } from "@mui/joy";
import { CardLayout } from "../../../layout/cards-layout/CardLayout";

export const DescricaoPerito = () => {
  return (
    <>
      <CardLayout
        cardActionContent={false}
        cardTitle="O que é um Perito Judicial?"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <Typography level="body-md">
            O perito é um profissional técnico, nomeado pelo juiz, responsável
            por analisar fatos que exigem conhecimento especializado dentro de
            um processo. Ele atua de forma imparcial, oferecendo um laudo claro,
            embasado e objetivo, que serve como base para decisões judiciais.
          </Typography>
          <FormLabel
            sx={{
              fontSize: "clamp(0.7rem,2.5vmin,3rem)",
              fontWeight: 700,
            }}
          >
            Atuação em Segurança do Trabalho
          </FormLabel>
          <Typography level="body-md">
            No campo da segurança do trabalho, ele avalia riscos ocupacionais,
            investiga acidentes, analisa condições de insalubridade e
            periculosidade, e verifica o cumprimento das normas
            regulamentadoras, como a NR-12, NR-15 e NR-17.
          </Typography>
          <FormLabel
            sx={{
              fontSize: "clamp(0.7rem,2.5vmin,3rem)",
              fontWeight: 700,
            }}
          >
            Importância do laudo técnico
          </FormLabel>
          <Typography level="body-md">
            O laudo elaborado pelo perito é um documento oficial que traduz
            aspectos técnicos para o juiz e as partes envolvidas. Ele tem grande
            peso no processo e pode ser decisivo para o desfecho da ação, desde
            que elaborado com clareza, precisão e responsabilidade.
          </Typography>
        </Box>
      </CardLayout>
    </>
  );
};
