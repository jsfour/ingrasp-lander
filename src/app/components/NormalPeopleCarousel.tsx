import { Box, Typography } from '@mui/joy';
import SectionHeader from './Header';
import { SectionContainer } from './SectionContainer';

export const NormalPeopleCarousel = ({ primary, secondary }: { primary?: string, secondary?: string }) => {
    const images = Array.from({ length: 8 }, (_, i) => `/photos/normal-people/${i + 1}.png`);

    return (
        <SectionContainer>
            <SectionHeader primaryText={primary || "State of the art character consistency across images."} />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                    gap: 2,
                    px: 2,
                    position: 'relative',
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                display: 'block',
                                paddingTop: '100%',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={`Normal person ${index + 1}`}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                backgroundColor: 'white',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </SectionContainer>
    );
}; 