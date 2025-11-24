import { Stack } from "@mui/joy";

interface ISection {
  id: string;
  padded?: boolean;
  children: React.ReactNode;
}

export const Section = (contract: ISection) => {
  return (
    <Stack
      id={contract.id}
      component={"section"}
      width={"100%"}
      maxWidth={"1440px"}
      mx={"auto"}
      minHeight={"40svh"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={contract.padded ? { p: { xs: "10px", md: "12px" } } : { p: 0 }}
    >
      {contract.children}
    </Stack>
  );
};
