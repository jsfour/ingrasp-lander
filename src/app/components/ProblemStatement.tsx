import { Box, Typography, Button, Grid, IconButton } from '@mui/joy';
import Card from '@mui/joy/Card';
import { styled } from '@mui/joy/styles';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SectionHeader from './Header';
import { demoLink } from './link-urls';
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

const CarouselContainer = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0',
});

const ProblemStatement = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
    };

    const getVisibleCards = () => {
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
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
                <SectionHeader primaryText="Discover the Power of Training Using Scenarios" secondaryText="Storytelling is a powerful tool for learning. It engages the brain in a way that is more effective than traditional information dumps." />

                <CarouselContainer>
                    <IconButton
                        onClick={handlePrevious}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2
                        }}
                    >
                        <KeyboardArrowLeftIcon />
                    </IconButton>

                    <Box sx={{
                        display: 'flex',
                        transition: 'transform 0.3s ease-in-out',
                        mx: 'auto',
                        maxWidth: '1000px',
                        gap: 2,
                        px: 8
                    }}>
                        {getVisibleCards().map((index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: '0 0 33.333%',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                <StyledCard
                                    onClick={() => setSelectedIndex(index)}
                                    variant={selectedIndex === index ? "solid" : "outlined"}
                                    color={selectedIndex === index ? "primary" : undefined}
                                    className={selectedIndex === index ? 'active' : ''}
                                >
                                    <Typography level="h4" sx={{ mb: 1.5 }}>
                                        {benefits[index].title}
                                    </Typography>
                                    <Typography level="body-md">
                                        {benefits[index].description}
                                    </Typography>
                                    <Typography level="body-sm" sx={{ mt: 2, opacity: 0.8 }}>
                                        Source: {benefits[index].source}
                                    </Typography>
                                </StyledCard>
                            </Box>
                        ))}
                    </Box>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2
                        }}
                    >
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </CarouselContainer>

                {/* Dots indicator */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 3
                }}>
                    {benefits.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            sx={{
                                width: '8px',
                                height: '8px',
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
                    sx={{ mt: 4, display: 'block', mx: 'auto', mb: 6 }}
                    onClick={() => window.open(demoLink, '_blank')}
                >
                    Schedule a demo
                </Button>
            </Box>
        </SectionContainer>
    );
};

export default ProblemStatement;