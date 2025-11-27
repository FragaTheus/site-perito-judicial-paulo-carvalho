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
        <Stack padding={"20px"} width={"100%"}>
          <ProcedureCard
            title="Como funciona"
            subtitle="Do contato à entrega"
          />
        </Stack>
      </Section>
    </Stack>
  );
};
