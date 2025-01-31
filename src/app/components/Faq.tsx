"use client";
import { Box, Accordion, AccordionGroup, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/joy';
import { faqs } from '../constants/faqs';
import SectionHeader from './Header';

export default function Faq() {
    return (
        <Container
            sx={{
                py: 8,
                px: 2
            }}
        >
            <Box sx={{ maxWidth: "lg", mx: "auto" }}>
                <SectionHeader primaryText="Frequently Asked Questions" />
                <AccordionGroup
                    sx={{
                        maxWidth: '100%',
                        mx: 'auto'
                    }}
                >
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            sx={{
                                mb: 2,
                                borderRadius: '8px',
                                //backgroundColor: 'transparent',
                                //transition: 'background-color 0.2s',
                                '&:hover': {
                                    outline: '1px solid',
                                },
                            }}
                        >
                            <AccordionSummary>
                                <Typography
                                    level="title-lg"
                                    sx={{
                                        fontSize: '1.125rem',
                                        fontWeight: 500
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    level="body-md"
                                    sx={{
                                        color: 'text.secondary',
                                        pl: 2
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionGroup>
            </Box>
        </Container>
    );
}
