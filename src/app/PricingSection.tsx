import { motion } from 'framer-motion';
import { Box, Container, Typography, Card, Button } from '@mui/joy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import InfiniteIcon from '@mui/icons-material/AllInclusive';
import SavingsIcon from '@mui/icons-material/Savings';
import { SectionContainer } from './components/SectionContainer';
import { demoLink } from './constants/link-urls';
import { CostComparisonChart } from './components/CostComparison';
import { sendGTMEvent } from '@next/third-parties/google'
interface FeatureProps {
    icon: React.ReactNode;
    text: string;
}

const features = [
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

const DemoCard = () => {
    return (
        <Box sx={{ maxWidth: 400, width: '100%' }}>
            <Card
                sx={{
                    p: 4,
                    height: '100%',
                    '&:hover': {
                        boxShadow: 'lg',
                    },
                }}
            >
                <Typography level="h2" sx={{ mb: 4, textAlign: 'center' }}>
                    Get Started
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {features.map((feature, index) => (
                        <Feature key={index} {...feature} />
                    ))}
                </Box>
                <Button
                    size="lg"
                    sx={{ mt: 4, width: '100%' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        sendGTMEvent({ event: "BookDemoClick", value: "Pricing" })
                        window.location.href = demoLink;
                    }}
                >
                    Book a Demo
                </Button>
            </Card>
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
                    <DemoCard />
                    <CostComparisonChart />
                </Box>
            </Container>
        </SectionContainer>
    );
} 