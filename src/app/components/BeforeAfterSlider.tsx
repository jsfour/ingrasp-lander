import { useState } from 'react';
import { Box } from '@mui/joy';

export const BeforeAfterSlider = () => {
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 400,
                overflow: 'hidden',
                borderRadius: 2,
                mt: 6,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/before.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${sliderValue}%`,
                    height: '100%',
                    backgroundImage: 'url(/after.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRight: '2px solid white',
                }}
            />

            <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(90deg)',
                    width: '400px',
                    cursor: 'pointer',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 1,
                }}
            >
                Stock Photo
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 1,
                }}
            >
                InGrasp Character
            </Box>
        </Box>
    );
}; 