import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Card } from '@mui/joy';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SectionHeader from './components/Header';

interface QuoteCardProps {
    quote: string;
    context: string;
    color: string;
    delay: number;
}

const quotes = [
    {
        quote: "I need to build stories to engage my audience.",
        context: "87% of learning professionals say engaging content is crucial for effective training.",
        color: 'rgba(165, 180, 252, 0.1)',
    },
    {
        quote: "It's hard to find character photos that support my stories.",
        context: "On average, content creators spend 5+ hours searching for the right character photos.",
        color: 'rgba(165, 180, 252, 0.1)',
    },
    {
        quote: "Photo shoots are expensive, and the ROI isn't there for small projects.",
        context: "Professional photo shoots can cost $2000+ per day, making them impractical for most training projects.",
        color: 'rgba(165, 180, 252, 0.1)',
    },
    {
        quote: "MidJourney / ChatGPT don't produce realistic, consistent characters across multiple situations.",
        context: "AI-generated images show 60%+ inconsistency when creating the same character in different poses.",
        color: 'rgba(165, 180, 252, 0.1)',
    },
];

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, context, color, delay }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            style={{ perspective: 1000 }}
        >
            <Card
                onClick={() => setIsFlipped(!isFlipped)}
                component={motion.div}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                    cursor: 'pointer',
                    background: color,
                    minHeight: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    border: '1px solid rgba(165, 180, 252, 0.2)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(165, 180, 252, 0.1)',
                    },
                }}
            >
                <AnimatePresence mode="wait">
                    {!isFlipped ? (
                        <motion.div
                            key="front"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                backfaceVisibility: 'hidden',
                                width: '100%',
                            }}
                        >
                            <Typography
                                level="h3"
                                sx={{
                                    fontSize: '1.1rem',
                                    textAlign: 'center',
                                    color: 'text.secondary',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                }}
                            >
                                {quote}
                            </Typography>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="back"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                            }}
                        >
                            <Typography
                                level="body-md"
                                sx={{
                                    textAlign: 'center',
                                    color: 'text.secondary',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                }}
                            >
                                {context}
                            </Typography>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
};

const IconTransition = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                mt: 6,
                mb: 4,
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                }}
            >
                <CameraAltIcon
                    sx={{
                        fontSize: '3rem',
                        color: '#666',
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                }}
            >
                <SmartToyIcon
                    sx={{
                        fontSize: '3rem',
                        color: '#666',
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                }}
            >
                <SentimentDissatisfiedIcon
                    sx={{
                        fontSize: '3rem',
                        color: '#666',
                    }}
                />
            </motion.div>
        </Box>
    );
};

export default function ProblemSection() {
    return (
        <Box
            sx={{
                py: 8,
                background: '#111',
                borderTop: '1px solid rgba(165, 180, 252, 0.2)',
                borderBottom: '1px solid rgba(165, 180, 252, 0.2)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader primaryText="When Story Builders Talk with Us, They Say…" />
                </motion.div>

                <IconTransition />

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr 1fr',
                        },
                        gap: 4,
                        mt: 4,
                    }}
                >
                    {quotes.map((quote, index) => (
                        <QuoteCard
                            key={index}
                            quote={quote.quote}
                            context={quote.context}
                            color={quote.color}
                            delay={index * 0.2}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
} 