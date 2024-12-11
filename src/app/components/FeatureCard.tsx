import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Card, Typography } from '@mui/joy';

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    gifUrl?: string;
    delay: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, gifUrl, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            style={{ perspective: 1000 }}
        >
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                component={motion.div}
                animate={{
                    rotateX: isHovered ? 5 : 0,
                    rotateY: isHovered ? 5 : 0,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                sx={{
                    height: '100%',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                    '&:hover': {
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    },
                }}
            >
                <Box
                    sx={{
                        mb: 2,
                        color: 'primary.500',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                >
                    {icon}
                </Box>

                <Typography
                    level="h3"
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: '1.25rem',
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    level="body-md"
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                    }}
                >
                    {description}
                </Typography>

                {gifUrl && isHovered && (
                    <Box
                        component="img"
                        src={gifUrl}
                        alt={title}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.15,
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </Card>
        </motion.div>
    );
}; 