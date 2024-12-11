"use client";
import { Box, Button, Container, Stack, Typography } from '@mui/joy';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollingImageGrid from './components/ScrollingImageGrid';
import StarfieldEffect from './components/StarfieldEffect';
import { useState } from 'react';

export default function HeroSection() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(true);
        // Reset after animation
        setTimeout(() => setIsClicked(false), 2000);
    };

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, transparent 66%, rgba(0,0,0,1))',
            }}
        >
            <AnimatePresence>
                {!isHovering && !isClicked && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 0,
                            filter: 'brightness(1.2) contrast(1.1)',
                        }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ScrollingImageGrid />
                    </motion.div>
                )}
            </AnimatePresence>

            <StarfieldEffect isActive={isHovering} isClicked={isClicked} />

            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    pt: { xs: 20, md: 32 },
                    pb: { xs: 16, md: 24 },
                }}
            >
                <Stack spacing={4} maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: isClicked ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            level="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(180deg, #FFFFFF 0%, #A5B4FC 100%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                transition: 'all 0.3s ease-in-out',
                                textShadow: '0 0 30px rgba(165, 180, 252, 0.3)',
                            }}
                        >
                            Realistic Consistent Characters for Your Training Programs
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isClicked ? 0 : 1,
                            y: 0
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography
                            level="h3"
                            sx={{
                                fontWeight: 500,
                                color: 'text.secondary',
                                maxWidth: '45ch',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            }}
                        >
                            Direct your own photo shoots, without the hassle or cost. Create custom, consistent characters that elevate your training or storytelling projects.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isClicked ? 0 : 1,
                            y: 0
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                        >
                            <Button
                                size="lg"
                                variant="solid"
                                color="primary"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onClick={handleButtonClick}
                                sx={{
                                    background: (theme) =>
                                        `linear-gradient(45deg, ${theme.vars.palette.primary[600]}, ${theme.vars.palette.primary[500]})`,
                                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                                    },
                                }}
                            >
                                Get Started
                            </Button>
                            <Button
                                size="lg"
                                variant="outlined"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onClick={handleButtonClick}
                                sx={{
                                    color: 'primary.300',
                                    transition: 'all 0.2s ease-in-out',
                                    backdropFilter: 'blur(8px)',
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                    '&:hover': {
                                        orderColor: 'primary.400',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)',
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
} 