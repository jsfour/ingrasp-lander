"use client";
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/joy';
import { useEffect, useState, useRef } from 'react';

const images = [
    '/photos/characters/1.png',
    '/photos/characters/2.png',
    '/photos/characters/3.png',
    '/photos/characters/4.png',
    '/photos/characters/5.png',
    '/photos/characters/6.png',
    '/photos/characters/7.png',
    '/photos/characters/8.png',
    '/photos/characters/9.png',
    '/photos/characters/10.png',
    '/photos/characters/11.png',
    '/photos/characters/12.png',
    '/photos/characters/13.png',
    '/photos/characters/14.png',
    '/photos/characters/15.png',
    '/photos/characters/16.png',
    '/photos/characters/17.png',
    '/photos/characters/18.png',
];

interface ScrollingColumnProps {
    images: string[];
    duration?: number;
    delay: number;
    index?: number;
}

const ScrollingColumn = ({ images, duration, delay, index = 0 }: ScrollingColumnProps) => {
    const [mounted, setMounted] = useState(false);
    const minDuration = 500;
    const maxDuration = 2500;
    const randomDuration = Math.random() * (maxDuration - minDuration) + minDuration;
    const currentDuration = duration ? Math.max(minDuration, Math.min(maxDuration, duration)) : maxDuration;


    useEffect(() => {
        setMounted(true);
    }, []);

    const repeatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

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
                initial={{ y: index % 2 === 0 ? '-50%' : '0%' }}
                animate={{ y: index % 2 === 0 ? '0%' : '-50%' }}
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
    const theme = useTheme();

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

    // Determine number of columns based on breakpoint
    const numColumns = {
        xs: 3,
        md: 8,
    };

    const columns = Array.from({ length: numColumns.md }, () => shuffleArray(images));

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
                gridTemplateColumns: {
                    xs: `repeat(${numColumns.xs}, 1fr)`,
                    md: `repeat(${numColumns.md}, 1fr)`,
                },
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
            {columns.slice(0, theme.breakpoints.values.md ? numColumns.md : numColumns.xs).map((columnImages, index) => (
                <ScrollingColumn
                    key={index}
                    images={columnImages}
                    delay={index * 0.1}
                    index={index}
                />
            ))}
        </Box>
    );
} 