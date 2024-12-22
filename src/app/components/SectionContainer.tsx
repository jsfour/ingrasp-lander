import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
    sx?: SxProps;
}

export const SectionContainer = ({ children, sx }: SectionContainerProps) => {
    return (
        <Box
            sx={{
                py: 8,
                ...sx
            }}
        >
            {children}
        </Box>
    );
};