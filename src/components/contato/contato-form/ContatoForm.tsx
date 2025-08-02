import {
  Box,
  Button,
  FormControl,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";
import { useWppContext } from "../../../contexts/WhatsAppContext";
import { useState } from "react";

export const ContatoForm = () => {
  const { enviarMsg } = useWppContext();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    contato: "",
    assunto: "",
    msg: "",
  });
  return (
    <Box
      id="contato-form"
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"20px"}
      padding={"30px"}
    >
      <Box>
        <Typography
          level="h3"
          textAlign={"center"}
          sx={{ color: "primary.100" }}
        >
          Entre em contato conosco:
        </Typography>
      </Box>
      <FormControl
        id="form-control"
        sx={{
          width: "70%",
          height: "90%",
          gap: "5px",
        }}
      >
        <Input
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          variant="outlined"
          color="neutral"
          size="sm"
          required
          placeholder="Digite seu nome"
          sx={{ fontSize: "xs" }}
        ></Input>
        <Input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          variant="outlined"
          color="neutral"
          size="sm"
          type="email"
          required
          placeholder="Digite seu email"
          sx={{ fontSize: "xs" }}
        ></Input>
        <Input
          onChange={(e) => setForm({ ...form, contato: e.target.value })}
          variant="outlined"
          color="neutral"
          size="sm"
          type="number"
          required
          placeholder="Digite seu numero"
          sx={{ fontSize: "xs" }}
        ></Input>
        <Select
          sx={{ padding: "3px" }}
          size={"xs" as any}
          variant="outlined"
          value={form.assunto}
          required
          onChange={(_, v) => {
            if (v !== null) {
              setForm((e) => ({ ...e, assunto: v }));
            }
          }}
          placeholder="Selecione o assunto"
        >
          <Option value="orcamento">Orçamento</Option>
          <Option value="suporte">Suporte</Option>
          <Option value="duvida">Dúvida</Option>
          <Option value="outros">Outros</Option>
        </Select>
        <Textarea
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          variant="outlined"
          required
          placeholder="Digite uma mensagem para Paulo..."
          sx={{ fontSize: "body-sm", flex: 1 }}
        ></Textarea>
        <Button
          variant="solid"
          type="submit"
          onClick={() =>
            enviarMsg(
              `Olá! Meu nome é ${form.nome} e gostaria de falar sobre: ${form.assunto}.
Telefone: ${form.contato}
Email: ${form.email}
Mensagem:
${form.msg}`
            )
          }
        >
          <Typography fontSize={"body-sm"} sx={{ color: "inherit" }}>
            Entrar em contato
          </Typography>
        </Button>
      </FormControl>
    </Box>
  );
};
