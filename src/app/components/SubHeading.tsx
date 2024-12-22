import { Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

interface SubHeadingProps {
    children: React.ReactNode;
    sx?: SxProps;
}

export default function SubHeading({ children, sx }: SubHeadingProps) {
    return (
        <Typography
            level="h3"
            sx={{
                fontWeight: 500,
                color: 'text.secondary',
                maxWidth: '45ch',
                //textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                ...sx
            }}
        >
            {children}
        </Typography>
    );
}