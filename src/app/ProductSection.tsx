import { Box, Container, Typography, List, ListItem } from '@mui/joy';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhotoIcon from '@mui/icons-material/Photo';
import DevicesIcon from '@mui/icons-material/Devices';
import { useState } from 'react';
import SectionHeader from './components/Header';
import { SectionContainer } from './components/SectionContainer';
import { keyframes } from '@emotion/react'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

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
        id: 4,
        title: "Create chracters that don't exist in stock photo libraries",
        description: "Create hard to find, diverse characters like children, people with disabilities, and more.",
        icon: <ImageSearchIcon sx={{ fontSize: '2rem' }} />,
        image: "/photos/hard-to-find-characters.png"
    },
    {
        id: 1,
        title: "Control poses and expressions of characters",
        description: "Control the poses and expressions of characters to create a consistent look and feel across images.",
        icon: <EmojiPeopleIcon sx={{ fontSize: '2rem' }} />,
        image: "/product/expression-control.png" // Add your mobile image path
    },
    {
        id: 3,
        title: "Any setting you can imagine, without the photo shoot",
        description: "Shoot in scenes that would cost tens of thousands of dollars to create using a professional photographer.",
        icon: <CameraAltIcon sx={{ fontSize: '2rem' }} />,
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
                        borderRadius: '8px',
                        backgroundColor: 'rgba(20, 20, 30, 0.5)',
                        backgroundImage: 'linear-gradient(to right, rgba(25, 25, 35, 0.6), rgba(35, 35, 60, 0.6))',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(60, 60, 90, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 4, md: 2 },
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
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
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
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
                                    backgroundColor: selectedFeature.id === feature.id
                                        ? 'rgba(30, 30, 45, 0.7)'
                                        : 'rgba(20, 20, 30, 0.5)',
                                    backgroundImage: selectedFeature.id === feature.id
                                        ? 'linear-gradient(to right, rgba(25, 25, 35, 0.6), rgba(35, 35, 60, 0.6))'
                                        : 'none',
                                    border: '1px solid rgba(60, 60, 90, 0.3)',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(8px)',
                                    mb: 2,
                                    '&:hover': {
                                        outline: selectedFeature.id === feature.id
                                            ? '1px solid rgba(138, 115, 255, 0.7)'
                                            : '1px solid rgba(138, 115, 255, 0.5)',
                                        backgroundColor: 'rgba(30, 30, 45, 0.7)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                    },
                                    boxShadow: selectedFeature.id === feature.id
                                        ? '0 0 0 2px rgba(138, 115, 255, 0.2)'
                                        : 'none',
                                }}
                                onClick={() => setSelectedFeature(feature)}
                            >
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                    <Box sx={{
                                        color: selectedFeature.id === feature.id
                                            ? 'rgba(138, 115, 255, 0.9)'
                                            : 'rgba(138, 115, 255, 0.7)'
                                    }}>
                                        {feature.icon}
                                    </Box>
                                    <Box>
                                        <Typography
                                            level="title-lg"
                                            sx={{
                                                mb: 0.5,
                                                fontSize: '1.125rem',
                                                fontWeight: 500,
                                                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(220, 220, 255, 0.95))',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            level="body-sm"
                                            sx={{
                                                color: 'rgba(210, 210, 240, 0.85)',
                                                fontWeight: 300,
                                            }}
                                        >
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