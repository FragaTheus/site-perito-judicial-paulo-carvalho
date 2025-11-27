import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  CardContent,
  Typography,
} from "@mui/joy";

type FAQCardProps = {
  question: string;
  answer: string;
};

export const FAQCard = (type: FAQCardProps) => {
  return (
    <Card
      variant="solid"
      sx={{
        bgcolor: "background.surface",
        boxShadow: "lg",
        width: "100%",
        maxWidth: "800px",
      }}
    >
      <CardContent>
        <AccordionGroup transition="0.2s ease" sx={{ bgcolor: "transparent" }}>
          <Accordion>
            <AccordionSummary>
              <Typography level="body-md">{type.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography level="body-sm">{type.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </CardContent>
    </Card>
  );
};
