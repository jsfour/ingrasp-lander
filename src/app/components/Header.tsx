import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

interface SectionHeaderProps {
    primaryText: string;
    secondaryText?: string;
    id?: string;
}

const SectionHeader = ({ primaryText, secondaryText, id }: SectionHeaderProps) => {
    return (
        <Box sx={{ mb: { xs: 3, sm: 4, md: 6 } }}>
            <Typography
                id={id}
                level="h1"
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    letterSpacing: { xs: '-0.01em', md: '-0.02em' },
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #A5B4FC 100%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'all 0.3s ease-in-out',
                    textShadow: '0 0 30px rgba(165, 180, 252, 0.3)',
                }}
            >
                {primaryText}
            </Typography>

            {secondaryText && <Typography
                level="h3"
                sx={{
                    mt: { xs: 1, sm: 1.5, md: 2 },
                    textAlign: 'center',
                    fontWeight: 500,
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
            >
                <Box sx={{
                    maxWidth: { xs: '35ch', sm: '40ch', md: '45ch' },
                    mx: 'auto'
                }}>
                    {secondaryText}
                </Box>
            </Typography>}
        </Box>
    )
}
export default SectionHeader;