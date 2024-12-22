import { Box } from '@mui/joy';

interface NoiseImageProps {
    scale: number;
    noiseProgress: number;
    opacity: number;
    imageSrc: string;
}

export default function NoiseImage({ scale, noiseProgress, opacity, imageSrc }: NoiseImageProps) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Box
                component="img"
                src={imageSrc}
                alt="Character"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale})`,
                    transition: 'all 0.2s ease-out',
                    borderRadius: '8px',
                    opacity,
                }}
            />
            {noiseProgress > 0 && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        transform: `scale(${scale})`,
                        isolation: 'isolate',
                    }}
                >
                    {/* Noise Layer */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(to top, black ${Math.max(0, noiseProgress * 100)}%, transparent ${Math.max(0, noiseProgress * 100 + 50)}%), url(/noise.svg)`,
                            filter: 'url(#noise) contrast(170%) brightness(1000%)',
                        }}
                    />
                    {/* Overlay Layer */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'transparent',
                            mixBlendMode: 'multiply',
                            opacity: noiseProgress,
                        }}
                    />
                </Box>
            )}
        </Box>
    );
} 