import { Box, Container, styled } from '@mui/material';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

const StyledLogoContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'black',
    padding: theme.spacing(4, 0),
    mt: 10,
    mb: 10,
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: theme.spacing(4),
    flexWrap: 'wrap',

    '& img': {
        filter: 'grayscale(100%)',
        opacity: 0.7,
        transition: 'all 0.3s ease',

        '&:hover': {
            filter: 'grayscale(0%)',
            opacity: 1,
        },
    },

    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(3),
    },
}));

const logos = [
    { src: '/logos/cibhs-logo.svg', alt: 'California Institute of Behavioral Health Services', width: 120, height: 40 },
    { src: '/logos/pacific-blue.webp', alt: 'Pacific Blue Instructional Design', width: 138, height: 28 },
    { src: '/logos/purpose-logo.svg', alt: 'Purpose Financial', width: 120, height: 40 },
    { src: '/logos/zenith-performance-solutions.png', alt: 'Zenith Performance Solutions', width: 120, height: 40 },
];

export default function LogoStrip() {
    return (
        <StyledLogoContainer>
            <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
                <LogoWrapper>
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width * 1.2}
                            height={logo.height * 1.2}
                        />
                    ))}
                </LogoWrapper>
            </Container>
        </StyledLogoContainer>
    );
}
