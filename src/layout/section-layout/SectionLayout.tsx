import { Box, Typography } from "@mui/joy";

interface ISectionLayout {
  title?: string;
  position?: string;
  top?: number;
  dark?: boolean;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayout> = ({
  title,
  position,
  top,
  children,
  dark,
}) => {
  return (
    <Box
      id="main"
      width={"100%"}
      minHeight={"100svh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
      position={position as any}
      top={top}
      padding={"20px"}
      sx={dark ? { bgcolor: "primary.400" } : {}}
    >
      <Box id="section-header" width={"80%"} height={"10svh"}>
        <Typography level="title-md" textAlign={"center"}>
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
