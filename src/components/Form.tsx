import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Stack,
  Typography,
} from "@mui/joy";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { useWppContext } from "../contexts/WhatsAppContext";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "textarea" | "select";
  required?: boolean;
  options?: { label: string; value: string }[];
}

const leadFields: FormField[] = [
  { name: "name", label: "Nome", type: "text", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "phone", label: "Telefone", type: "text", required: true },
  {
    name: "service",
    label: "Serviço desejado",
    type: "select",
    required: true,
    options: [
      { label: "Perícia Trabalhista", value: "Perícia Trabalhista" },
      { label: "Perícia Judicial", value: "Perícia Judicial" },
      { label: "Consultoria Técnica", value: "Consultoria Técnica" },
    ],
  },
  { name: "message", label: "Descreva seu caso", type: "textarea" },
];

export const DynamicForm = () => {
  const { control, getValues } = useForm();
  const { enviarMsg } = useWppContext();

  const handleSend = () => {
    const data = getValues();

    const texto = `
Olá, Paulo! Entrei em contato pelo site.

🔹 Nome: ${data.name || "-"}
🔹 E-mail: ${data.email || "-"}
🔹 Telefone: ${data.phone || "-"}
🔹 Serviço desejado: ${data.service || "-"}

📌 Descrição do caso:
${data.message || "Não informado"}

Pode me orientar sobre os próximos passos?
    `.trim();

    enviarMsg(texto);
  };

  return (
    <Card
      variant="solid"
      sx={{
        p: 3,
        width: "100%",
        maxWidth: "600px",
        boxShadow: "lg",
        bgcolor: "background.surface",
      }}
    >
      <Stack spacing={2}>
        {leadFields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            render={({ field: f }) => (
              <FormControl required={field.required}>
                <FormLabel>{field.label}</FormLabel>

                {field.type === "textarea" && (
                  <Textarea
                    variant="soft"
                    minRows={4}
                    value={f.value || ""}
                    onChange={(e) => f.onChange(e.target.value)}
                  />
                )}

                {field.type === "select" && (
                  <Select
                    variant="soft"
                    placeholder="Selecione..."
                    value={f.value || ""}
                    onChange={(_, value) => f.onChange(value)}
                  >
                    {field.options?.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                )}

                {(field.type === "text" ||
                  field.type === "email" ||
                  field.type === "number") && (
                  <Input
                    variant="soft"
                    type={field.type}
                    value={f.value || ""}
                    onChange={(e) => f.onChange(e.target.value)}
                  />
                )}
              </FormControl>
            )}
          />
        ))}

        <Button variant="outlined" onClick={handleSend}>
          <Typography level="body-md">Enviar pelo WhatsApp</Typography>
        </Button>
      </Stack>
    </Card>
  );
};
