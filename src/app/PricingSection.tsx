import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Card, Button } from '@mui/joy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import InfiniteIcon from '@mui/icons-material/AllInclusive';
import SavingsIcon from '@mui/icons-material/Savings';
import { SectionContainer } from './components/SectionContainer';
import { demoLink } from './components/link-urls';

interface FeatureProps {
    icon: React.ReactNode;
    text: string;
}

const features: FeatureProps[] = [
    {
        icon: <AutorenewIcon />,
        text: "Unlimited use, infinite characters",
    },
    {
        icon: <InfiniteIcon />,
        text: "All features included",
    },
    {
        icon: <SavingsIcon />,
        text: "Save thousands compared to custom photo shoots",
    },
];

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box sx={{ color: 'primary.500' }}>{icon}</Box>
        <Typography level="body-md">{text}</Typography>
    </Box>
);

const PricingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Box sx={{ perspective: 1000, maxWidth: 400, width: '100%', height: 400 }}>
            <Card
                sx={{
                    p: 0,
                    height: '100%',
                    position: 'relative',
                    '&:hover': {
                        boxShadow: 'lg',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography level="h2" sx={{ mb: 2, textAlign: 'center' }}>
                        $800
                        <Typography level="body-sm" component="span">/year</Typography>
                    </Typography>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {features.map((feature, index) => (
                            <Feature key={index} {...feature} />
                        ))}
                    </Box>
                    <Button
                        size="lg"
                        sx={{ mt: 4 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = demoLink;
                        }}
                    >
                        Get Started Now
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

const CostComparisonChart = () => {
    return (
        <Box sx={{ mt: 6, width: '100%', maxWidth: 600 }}>
            <Typography level="h3" sx={{ mb: 4, textAlign: 'center' }}>
                Annual Cost Comparison
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
            }}>
                {/* InGrasp Bar */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Ingrasp</Typography>
                        <Typography level="body-md" fontWeight="bold">$600/year</Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '40px',
                        background: '#f0f0f0',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '6%' }} // 600/10000 = 6%
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Box>

                {/* Custom Photo Shoots Bar */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Custom Photo Shoots</Typography>
                        <Typography level="body-md" fontWeight="bold">$10,000+/year</Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '40px',
                        background: '#f0f0f0',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                background: 'linear-gradient(90deg, #e91e63 0%, #c2185b 100%)',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Box>

                {/* Savings Callout */}
                <Box sx={{
                    mt: 2,
                    p: 3,
                    background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                }}>
                    <Typography
                        level="h4"
                        sx={{
                            textAlign: 'center',
                            color: 'primary.main',
                        }}
                    >
                        Save up to 94% annually
                    </Typography>
                    <Typography
                        level="body-md"
                        sx={{
                            textAlign: 'center',
                            mt: 1,
                            color: 'text.secondary',
                        }}
                    >
                        Compared to traditional photo shoots
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default function PricingSection() {
    return (
        <SectionContainer
            sx={{
                py: 8,
                backgroundColor: "#111"
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        level="h1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Professional Storytelling Without the Price Tag
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                    }}
                >
                    <PricingCard />
                    <CostComparisonChart />
                </Box>
            </Container>
        </SectionContainer>
    );
} 