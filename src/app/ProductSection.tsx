import { Box, Container, Typography, List, ListItem } from '@mui/joy';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhotoIcon from '@mui/icons-material/Photo';
import DevicesIcon from '@mui/icons-material/Devices';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import SectionHeader from './components/Header';
import { SectionContainer } from './components/SectionContainer';
import { keyframes } from '@emotion/react';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    image: string;
}

const features: Feature[] = [
    {
        id: 2,
        title: "Support training narratives with photos",
        description: "Create a consistent character across multiple scenarios without the need to endlessly reprompt. Or Custom photo shoots.",
        icon: <PhotoIcon sx={{ fontSize: '2rem' }} />,
        image: "/product/characters-in-situations.png" // Add your dashboard image path
    },
    {
        id: 1,
        title: "Control poses and expressions of characters",
        description: "Access your data on the go with our mobile app version of the product.",
        icon: <DashboardIcon sx={{ fontSize: '2rem' }} />,
        image: "/product/expression-control.png" // Add your mobile image path
    },
    {
        id: 3,
        title: "Any setting you can imagine, without the photo shoot",
        description: "Use the product seamlessly across web, mobile, and desktop platforms.",
        icon: <DevicesIcon sx={{ fontSize: '2rem' }} />,
        image: "/product/background-studio-shot.png" // Add your platforms image path
    }
];

export default function ProductSection() {
    const [selectedFeature, setSelectedFeature] = useState(features[0]);

    return (
        <SectionContainer
        >
            <Box sx={{ maxWidth: "lg", mx: "auto" }}>
                <SectionHeader primaryText="Realistic Characters for Training Scenarios" secondaryText='We take the pain out of creating realistic characters for training scenarios' />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 4,
                        alignItems: 'center',
                    }}
                >
                    {/* Image Section */}
                    <Box sx={{
                        position: 'relative',
                        minHeight: '100%',
                        borderRadius: '5px',
                        border: `1px solid ${grey[900]}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedFeature.id}
                                src={selectedFeature.image}
                                alt={selectedFeature.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    width: '80%',
                                    height: '80%',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                        </AnimatePresence>
                    </Box>

                    {/* Features List */}
                    <List>
                        {features.map((feature) => (
                            <ListItem
                                key={feature.id}
                                sx={{
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    p: 8,
                                    backgroundColor: selectedFeature.id === feature.id ? grey[900] : 'transparent',
                                    transition: 'background-color 0.2s',
                                }}
                                onClick={() => setSelectedFeature(feature)}
                            >
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                    <Box sx={{ color: 'primary.500' }}>
                                        {feature.icon}
                                    </Box>
                                    <Box>
                                        <Typography level="title-lg" sx={{ mb: 0.5 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </SectionContainer>
    );
} 