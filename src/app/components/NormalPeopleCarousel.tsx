import { Box, Typography } from '@mui/joy';

export const NormalPeopleCarousel = ({ primary, secondary }: { primary?: string, secondary?: string }) => {
    const images = Array.from({ length: 8 }, (_, i) => `/photos/normal-people/${i + 1}.png`);

    return (
        <Box sx={{ width: '100%', mt: 8, mb: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}>
                <Typography
                    level="h1"
                    sx={{
                        textAlign: 'center',
                        //fontSize: { xs: '2.5rem', md: '3.5rem' },
                        //fontWeight: 400,
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
                    {primary || "Finally normal people. In multiple situations."}
                </Typography>
                <Typography
                    level="h3"
                    sx={{
                        //fontWeight: 500,
                        textAlign: 'center',
                        color: 'text.secondary',
                        maxWidth: '45ch',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    }}
                >
                    {secondary || "Finally normal people. In multiple situations."}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
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
        </Box>
    );
}; 