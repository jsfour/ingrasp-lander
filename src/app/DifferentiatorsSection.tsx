import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Modal, ModalClose, Card, IconButton } from '@mui/joy';
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CompareIcon from '@mui/icons-material/Compare';
import SectionHeader from './components/Header';
import { SectionContainer } from './components/SectionContainer';

interface TimelineStepProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    pros?: string[];
    cons?: string[];
    index: number;
}

const steps: TimelineStepProps[] = [
    {
        title: "Stock Photos",
        description: "Stock photos are generic and don't have consistent characters or scenes.",
        icon: <CollectionsIcon />,
        pros: ["Professional quality", "Ready to use"],
        cons: ["Limited selection", "Inconsistent across scenes", "Expensive for custom shoots"],
        index: 0,
    },
    {
        title: "Generic AI",
        description: "MidJourney / ChatGPT don't produce realistic, consistent characters across multiple situations.",
        icon: <SmartToyIcon />,
        pros: ["Unlimited generation", "Low cost per image"],
        cons: ["Inconsistent results", "Complex prompting", "Unrealistic outputs"],
        index: 1,
    },
    {
        title: "Custom photo shoots",
        description: "Custom photo shoots are expensive and time consuming.",
        icon: <PhotoCameraIcon />,
        pros: [
            "Infinite characters and poses",
            "Consistent across scenes",
            "No prompt engineering",
            "Huge cost savings",
        ],
        index: 2,
    },
];

export default function DifferentiatorsSection() {
    return (
        <SectionContainer sx={{ background: '#111', borderTop: '1px solid rgba(165, 180, 252, 0.1)' }}>
            <Container maxWidth="lg">
                <SectionHeader primaryText="Content for story based training is hard to find" />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 4,
                        position: 'relative',
                    }}
                >
                    {steps.map((step) => (
                        <Card
                            key={step.index}
                            sx={{
                                position: 'relative',
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                '&:hover': {
                                    boxShadow: 'md',
                                    transform: 'translateY(-4px)',
                                },
                                transition: 'all 0.2s ease-in-out',
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'primary.500',
                                    fontSize: '2.5rem',
                                    mb: 2,
                                }}
                            >
                                {step.icon}
                            </Box>

                            <Typography level="h3" sx={{ mb: 1 }}>
                                {step.title}
                            </Typography>

                            <Typography level="body-md" sx={{ color: 'text.secondary', mb: 2 }}>
                                {step.description}
                            </Typography>
                        </Card>
                    ))}
                </Box>
            </Container>
        </SectionContainer>
    );
} 