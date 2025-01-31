import { Box, Typography, Button, Grid, IconButton, useTheme } from '@mui/joy';
import Card from '@mui/joy/Card';
import { styled } from '@mui/joy/styles';
import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SectionHeader from './Header';
import { demoLink } from '../constants/link-urls';
import { SectionContainer } from './SectionContainer';

const benefits = [
    {
        title: "Boosts Retention Through Neural Coupling",
        description: "Storytelling engages sensory, emotional, and memory-processing regions of the brain simultaneously. This neural coupling helps learners connect the material to their own experiences, improving comprehension and retention.",
        source: "Princeton Neuroscience Institute"
    },
    {
        title: "Enhances Memory Through Emotional Responses",
        description: "Stories activate the amygdala, the brain's emotion center, which enhances memory retention. Emotionally engaging content is remembered longer than non-narrative information.",
        source: "Harvard Business Review, 2018"
    },
    {
        title: "Simplifies Complex Concepts",
        description: "Using familiar narrative structures, stories make abstract or technical ideas more relatable and digestible. This reduces cognitive load and aids understanding.",
        source: "Sweller, 1988"
    },
    {
        title: "Increases Engagement and Focus",
        description: "Stories trigger the release of dopamine, a neurotransmitter associated with motivation and focus, keeping learners engaged and improving their ability to retain information.",
        source: "Paul J. Zak, Neuroeconomist"
    },
    {
        title: "Builds Empathy Through Social Learning",
        description: "Mirror neurons in the brain allow learners to 'experience' the emotions and actions of characters in a story. This fosters empathy and makes training more impactful.",
        source: "Gallese, 2001"
    },
    {
        title: "Promotes Behavioral Change",
        description: "Stories provide real-world context and illustrate cause-and-effect relationships, helping learners understand the consequences of their actions and guiding behavioral change.",
        source: "Heath & Heath, 'Made to Stick,' 2007"
    }
];

const StyledCard = styled(Card)({
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    height: '100%',
    transform: 'scale(0.9)',
    opacity: 0.7,
    '&.active': {
        transform: 'scale(1)',
        opacity: 1,
    },
    '&:hover': {
        transform: 'scale(1.02)',
    },
});

const CarouselContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 0',
    },
}));

const ProblemStatement = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
    };

    const getVisibleCards = () => {
        if (isMobile) {
            return [selectedIndex];
        }

        const cards = [];
        const prev = selectedIndex === 0 ? benefits.length - 1 : selectedIndex - 1;
        const next = selectedIndex === benefits.length - 1 ? 0 : selectedIndex + 1;

        cards.push(prev);
        cards.push(selectedIndex);
        cards.push(next);

        return cards;
    };

    return (
        <SectionContainer>
            <Box sx={{
                maxWidth: '1200px',
                mx: 'auto',
                px: { xs: 2, sm: 3 }
            }}>
                <SectionHeader
                    primaryText="Discover the Power of Training Using Scenarios"
                    secondaryText="Storytelling is a powerful tool for learning. It engages the brain in a way that is more effective than traditional information dumps."
                />

                <CarouselContainer>
                    {!isMobile && (
                        <IconButton
                            onClick={handlePrevious}
                            sx={{
                                position: 'absolute',
                                left: { xs: -8, sm: 0 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2
                            }}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    )}

                    <Box sx={{
                        display: 'flex',
                        transition: 'transform 0.3s ease-in-out',
                        mx: 'auto',
                        maxWidth: '1000px',
                        gap: { xs: 1, sm: 2 },
                        px: { xs: 0, sm: 8 }
                    }}>
                        {getVisibleCards().map((index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: isMobile ? '0 0 100%' : '0 0 33.333%',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                <StyledCard
                                    onClick={() => setSelectedIndex(index)}
                                    variant={selectedIndex === index ? "solid" : "outlined"}
                                    color={selectedIndex === index ? "primary" : undefined}
                                    className={selectedIndex === index ? 'active' : ''}
                                >
                                    <Typography
                                        level="h4"
                                        sx={{
                                            mb: 1.5,
                                            fontSize: { xs: 'lg', sm: 'xl' }
                                        }}
                                    >
                                        {benefits[index].title}
                                    </Typography>
                                    <Typography
                                        level="body-md"
                                        sx={{
                                            fontSize: { xs: 'sm', sm: 'md' }
                                        }}
                                    >
                                        {benefits[index].description}
                                    </Typography>
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            mt: 2,
                                            opacity: 0.8,
                                            fontSize: { xs: 'xs', sm: 'sm' }
                                        }}
                                    >
                                        Source: {benefits[index].source}
                                    </Typography>
                                </StyledCard>
                            </Box>
                        ))}
                    </Box>

                    {!isMobile && (
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: { xs: -8, sm: 0 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2
                            }}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    )}
                </CarouselContainer>

                {/* Dots indicator */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: { xs: 2, sm: 3 }
                }}>
                    {benefits.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            sx={{
                                width: { xs: '6px', sm: '8px' },
                                height: { xs: '6px', sm: '8px' },
                                borderRadius: '50%',
                                bgcolor: index === selectedIndex ? 'primary.500' : 'neutral.300',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                        />
                    ))}
                </Box>

                <Button
                    size="lg"
                    sx={{
                        mt: { xs: 3, sm: 4 },
                        display: 'block',
                        mx: 'auto',
                        mb: { xs: 4, sm: 6 },
                        width: { xs: '100%', sm: 'auto' }
                    }}
                    onClick={() => window.open(demoLink, '_blank')}
                >
                    Schedule a demo
                </Button>
            </Box>
        </SectionContainer>
    );
};

export default ProblemStatement;