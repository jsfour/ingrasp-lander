import { Box, Container, Typography } from '@mui/joy';
import { motion } from 'framer-motion';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FeatureCard, type FeatureCardProps } from './components/FeatureCard';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';

const features: FeatureCardProps[] = [
    {
        title: "Generate Realistic, Consistent Characters",
        description: "Create photorealistic characters that maintain their identity across different poses and scenarios.",
        icon: <AutoFixHighIcon sx={{ fontSize: '2.5rem' }} />,
        gifUrl: "/feature1.gif",
        delay: 0,
    },
    {
        title: "Build Your Scenes with Ease",
        description: "Drag and drop characters into any scene, with automatic lighting and perspective adjustments.",
        icon: <TheaterComedyIcon sx={{ fontSize: '2.5rem' }} />,
        gifUrl: "/feature2.gif",
        delay: 0.2,
    },
    {
        title: "Save Time and Costs",
        description: "Reduce production costs by 80% compared to traditional photo shoots while maintaining professional quality.",
        icon: <AccessTimeIcon sx={{ fontSize: '2.5rem' }} />,
        gifUrl: "/feature3.gif",
        delay: 0.4,
    },
];

export default function ProductSection() {
    return (
        <Box
            sx={{
                py: 8,
                background: 'linear-gradient(180deg, #fff 0%, #f5f5f5 100%)',
            }}
        >
            <Container maxWidth="lg">
                {/* Product Showcase */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: 6,
                        mb: 12,
                    }}
                >
                    {/* Rest of the ProductSection component remains the same */}
                    {/* ... */}
                </Box>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        level="h1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Meet Your Advanced Character Builder
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 4,
                        mb: 6,
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </Box>

                <BeforeAfterSlider />

            </Container>
        </Box>
    );
} 