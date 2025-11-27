import { Stack } from "@mui/joy";
import { Section } from "../../components/Section";
import { ProcedureCard } from "../../components/ProcedureCard";

export const Processo = () => {
  return (
    <Stack
      bgcolor={"background.body"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Section id="processo-section" padded={true}>
        <ProcedureCard title="Como funciona" subtitle="Do contato à entrega" />
      </Section>
    </Stack>
  );
};
