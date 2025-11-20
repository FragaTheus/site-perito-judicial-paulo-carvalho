import { Box, Divider, Typography } from "@mui/joy";
import { IntroCard } from "../cards/intro-card/IntroCard";
import { useResContext } from "../../contexts/ResponsiveContext";

type IntroCardProps = {
  title: string;
  text: string;
  path: string;
};

type IntroHomeProps = {
  title: string;
  description: string;
  cardProps: IntroCardProps[];
};

export const IntroHome: React.FC<IntroHomeProps> = ({
  title,
  cardProps,
  description,
}) => {
  const { isMobile } = useResContext();
  return (
    <>
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={isMobile ? "10px" : "20px"}
      >
        <Typography level="title-lg" sx={{ color: "primary.100", mt: "-20px" }}>
          {title}
        </Typography>
        <Divider />
        <Typography level="title-sm">{description}</Typography>
      </Box>
      <Box
        width={"99vw"}
        display={"flex"}
        justifyContent={"center"}
        sx={{ overflowX: "auto" }}
      >
        <Box
          width={"75%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={"20px"}
        >
          {cardProps.map((c) => (
            <IntroCard
              key={c.title}
              cardTitle={c.title}
              text={c.text}
              path={c.path}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
