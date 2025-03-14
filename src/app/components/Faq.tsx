"use client";
import { Box, Accordion, AccordionGroup, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/joy';
import SectionHeader from './Header';
import { useState } from 'react';

export default function Faq({ primaryText, secondaryText, faqs }: { primaryText: string, secondaryText: string, faqs: any[] }) {
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleChange = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Container
            sx={{
                py: 8,
                px: 2
            }}
        >
            <Box sx={{ maxWidth: "lg", mx: "auto" }}>
                <SectionHeader primaryText={primaryText} secondaryText={secondaryText} />
                <AccordionGroup
                    sx={{
                        maxWidth: '100%',
                        mx: 'auto'
                    }}
                >
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={() => handleChange(index)}
                            sx={{
                                mb: 2,
                                borderRadius: '8px',
                                backgroundColor: 'rgba(20, 20, 30, 0.5)',
                                backgroundImage: 'linear-gradient(to right, rgba(25, 25, 35, 0.6), rgba(35, 35, 60, 0.6))',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(60, 60, 90, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    outline: '1px solid rgba(138, 115, 255, 0.5)',
                                    backgroundColor: 'rgba(30, 30, 45, 0.7)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                },
                                '&:focus-within': {
                                    borderColor: 'rgba(138, 115, 255, 0.7)',
                                    boxShadow: '0 0 0 3px rgba(138, 115, 255, 0.2)',
                                },
                            }}
                        >
                            <AccordionSummary
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(40, 40, 60, 0.5)',
                                    },
                                    '&.Mui-expanded': {
                                        borderBottom: '1px solid rgba(80, 80, 120, 0.3)',
                                    }
                                }}
                            >
                                <Typography
                                    level="title-lg"
                                    sx={{
                                        fontSize: '1.125rem',
                                        fontWeight: 500,
                                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(220, 220, 255, 0.95))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: 'rgba(25, 25, 35, 0.3)',
                                }}
                            >
                                <Typography
                                    level="body-md"
                                    sx={{
                                        color: 'rgba(210, 210, 240, 0.85)',
                                        pl: 2,
                                        fontWeight: 300,
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
