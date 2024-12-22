import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

interface SectionHeaderProps {
    primaryText: string;
    secondaryText?: string;
}

const SectionHeader = ({ primaryText, secondaryText }: SectionHeaderProps) => {
    return (
        <Box sx={{ mb: 6 }}>
            <Typography
                level="h1"
                sx={{
                    textAlign: 'center',
                    //fontSize: { xs: '2.5rem', md: '3.5rem' },
                    //fontWeight: 800,
                    letterSpacing: '-0.02em',
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
                    mt: 2,
                    textAlign: 'center',
                    fontWeight: 500,
                    color: 'text.secondary',
                    //textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
            >
                <Box sx={{ maxWidth: '45ch', mx: 'auto' }}>
                    {secondaryText}
                </Box>
            </Typography>}
        </Box>
    )
}
export default SectionHeader;