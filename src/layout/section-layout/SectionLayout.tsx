import { Box, Typography } from "@mui/joy";

interface ISectionLayout {
  title?: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayout> = ({
  title,
  children,
}) => {
  return (
    <Box
      width={"100%"}
      minHeight={"100svh"}
      maxHeight={"200svh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Box id="section-title-layout" width={"80%"} height={"10svh"}>
        <Typography level="title-md" textAlign={"center"}>
          {title}
        </Typography>
      </Box>

      {children}
    </Box>
  );
};
