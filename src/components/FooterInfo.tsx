import { Stack, Typography, Link } from "@mui/joy";
import { Logo } from "./Logo";

export const FooterInfo = () => {
  return (
    <Stack spacing={0.5} alignItems="center" textAlign="center" p={2}>
      <Logo />
      <Typography level="title-md">Paulo de Carvalho Pereira</Typography>

      <Typography level="body-md" sx={{ color: "#ffffff" }}>
        11 97224-8445
      </Typography>

      <Link
        href="mailto:perito.paulo@bol.com.br"
        level="body-sm"
        underline="none"
      >
        <Typography level="body-md" sx={{ color: "#ffffff" }}>
          perito.paulo@bol.com.br
        </Typography>
      </Link>

      <Link
        href="mailto:perito.paulocarvalho@gmail.com"
        level="body-sm"
        underline="none"
      >
        <Typography level="body-md" sx={{ color: "#ffffff" }}>
          perito.paulocarvalho@gmail.com
        </Typography>
      </Link>

      <Typography
        level="body-sm"
        sx={{ mt: 1.5, opacity: 0.7, color: "#ffffff" }}
      >
        © 2025 Paulo de Carvalho. Todos os direitos reservados.
      </Typography>
    </Stack>
  );
};
