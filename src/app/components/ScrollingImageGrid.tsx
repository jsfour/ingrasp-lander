"use client";
import { motion } from 'framer-motion';
import { Box } from '@mui/joy';
import { useEffect, useState, useRef } from 'react';

const images = [
    // Professional/Business
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200', // Professional woman
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200', // Business man
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200', // Woman presenting
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200', // Office meeting

    // Training/Education
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=200', // Workshop
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=200', // Presentation
    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=200', // Learning
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=200', // Study group

    // Casual/Lifestyle
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200', // Casual portrait
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200', // Group collaboration
    'https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=200', // Coffee shop work
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200', // Students group

    // Diverse Scenarios
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200', // Team meeting
    'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=200', // Presentation screen
    'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=200', // Diverse team
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=200', // Office celebration

    // Tech/Modern
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=200', // Tech workspace
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200', // Digital interaction
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200', // Tech team
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200', // Digital workspace

    // Creative/Story
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=200', // Creative work
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200', // Storytelling
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200', // Team planning
];

interface ScrollingColumnProps {
    images: string[];
    duration: number;
    delay: number;
}

const ScrollingColumn = ({ images, duration, delay }: ScrollingColumnProps) => {
    const [mounted, setMounted] = useState(false);
    const startTime = useRef(Date.now());
    const initialDuration = duration / 4;
    const finalDuration = duration * 2;

    useEffect(() => {
        setMounted(true);
    }, []);

    const repeatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

    const currentDuration = mounted ?
        Math.min(finalDuration, initialDuration + ((Date.now() - startTime.current) / 1000) * (finalDuration - initialDuration))
        : initialDuration;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transform: mounted ? 'none' : 'translateY(0)',
            }}
        >
            <motion.div
                initial={{ y: '-50%' }}
                animate={{ y: '0%' }}
                transition={{
                    duration: currentDuration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay,
                    repeatType: 'loop',
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    willChange: 'transform',
                }}
            >
                {repeatedImages.map((src, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            height: '200px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            opacity: 0.5,
                            transition: 'all 0.3s ease',
                            transform: 'scale(0.98)',
                            '&:hover': {
                                opacity: 0.8,
                                transform: 'scale(1)',
                            },
                            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                            backgroundColor: '#171717',
                        }}
                    >
                        <Box
                            component="img"
                            src={src}
                            alt=""
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                //mixBlendMode: 'luminosity',
                            }}
                        />
                    </Box>
                ))}
            </motion.div>
        </Box>
    );
};

export default function ScrollingImageGrid() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const shuffleArray = (array: string[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const columns = Array.from({ length: 8 }, () => shuffleArray(images));

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gap: '0.75rem',
                p: '0.75rem',
                opacity: mounted ? 0.35 : 0,
                transition: 'opacity 0.5s ease-in',
                mask: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                pointerEvents: 'none',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
                    pointerEvents: 'none',
                },
            }}
        >
            {columns.map((columnImages, index) => (
                <ScrollingColumn
                    key={index}
                    images={columnImages}
                    duration={480 + (index * 30)}
                    delay={0}
                />
            ))}
        </Box>
    );
} 