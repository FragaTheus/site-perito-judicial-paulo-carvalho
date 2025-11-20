import { Box, Divider, Typography } from "@mui/joy";

interface ISectionLayout {
  title?: string | null;
  position?: string;
  top?: number;
  dark?: boolean;
  divId?: String;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayout> = ({
  divId,
  title,
  position,
  top,
  children,
  dark,
}) => {
  return (
    <>
      <div id={divId as any} />
      <Box
        id="main"
        width={"100%"}
        minHeight={"90svh"}
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
        <Box
          id="section-header"
          width={"80%"}
          height={"10svh"}
          display={"flex"}
        >
          <Typography
            level="title-lg"
            textAlign={"left"}
            sx={{ color: "primary.100" }}
          >
            {title}
          </Typography>
        </Box>
        {title && title != null && (
          <Divider sx={{ width: "80%", alignSelf: "center" }} />
        )}

        {children}
      </Box>
    </>
  );
};
