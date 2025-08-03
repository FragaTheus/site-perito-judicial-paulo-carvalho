import React from "react";
import { SectionLayout } from "../section-layout/SectionLayout";
import { Box } from "@mui/joy";

type SectionProps = {
  title?: string;
  component: React.ReactNode;
};

interface IPageLayoutProps {
  heroComponent?: React.ReactNode;
  sections: SectionProps[];
  children?: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({
  heroComponent,
  sections,
  children,
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
        <SectionLayout key={i} title={section.title}>
          {section.component}
        </SectionLayout>
      ))}
      {children && (
        <Box id="static-section" width={"100%"}>
          {children}
        </Box>
      )}
    </>
  );
};
