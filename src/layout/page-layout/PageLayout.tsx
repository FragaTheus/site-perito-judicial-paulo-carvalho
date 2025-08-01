import React from "react";
import { SectionLayout } from "../section-layout/SectionLayout";
import { Box } from "@mui/joy";
import { Footer } from "../../components/footer/Footer";

interface ISectionProps {
  title?: string;
  position?: string;
  top?: number;
  component: React.ReactNode;
}

interface IPageLayoutProps {
  heroComponent?: React.ReactNode;
  sections: ISectionProps[];
}

export const PageLayout: React.FC<IPageLayoutProps> = ({
  heroComponent,
  sections,
}) => {
  return (
    <>
      {heroComponent && (
        <Box
          width={"100%"}
          height={"90svh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
        >
          {heroComponent}
        </Box>
      )}
      {sections.map((section, i) => (
        <SectionLayout
          key={i}
          title={section.title}
          position={section.position}
          top={section.top}
        >
          {section.component}
        </SectionLayout>
      ))}
      <Box flex={1} bgcolor={"#121212"}>
        <Footer />
      </Box>
    </>
  );
};
