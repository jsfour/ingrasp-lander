import { Box } from '@mui/joy';
import { useEffect, useState, useRef } from 'react';
import NoiseImage from './components/NoiseImage';

export default function ImagesSection() {
    const [scale, setScale] = useState(1);
    const [noiseProgress, setNoiseProgress] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [showImage, setShowImage] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const sectionHeight = rect.height;

                // Calculate how far the viewport bottom is through the section
                const viewportBottom = viewportHeight - rect.top;
                const halfwayPoint = sectionHeight / 2;

                // Only start animation when viewport bottom is past halfway
                if (viewportBottom > halfwayPoint) {
                    // Calculate progress from halfway point to end of section
                    const progressStart = halfwayPoint;
                    const progressEnd = sectionHeight;
                    const scrollProgress = Math.max(0, Math.min(1,
                        (viewportBottom - progressStart) / (progressEnd - progressStart)
                    ));

                    if (scrollProgress <= 0.5) {
                        // First half: Scale up to full size
                        const scaleProgress = scrollProgress * 2; // Double speed to complete by halfway
                        setScale(1 + scaleProgress); // Scale from 1 to 2
                        setNoiseProgress(0);
                        setOpacity(1);
                        setShowImage(true);
                    } else {
                        // Second half: Add noise and fade out
                        const secondHalfProgress = (scrollProgress - 0.5) * 2; // Normalize to 0-1 for second half
                        setScale(2); // Keep at max scale

                        if (secondHalfProgress <= 0.8) {
                            // First 80% of second half: Add noise
                            const noiseAmount = secondHalfProgress * 1.25; // Complete noise by 80%
                            setNoiseProgress(noiseAmount);
                            setOpacity(1);
                        } else {
                            // Last 20% of second half: Fade out
                            const fadeProgress = (secondHalfProgress - 0.8) * 5; // Normalize remaining 20% to 0-1
                            setNoiseProgress(1);
                            setOpacity(1 - fadeProgress);
                            if (fadeProgress >= 1) {
                                setShowImage(false);
                            }
                        }
                    }
                } else {
                    // Reset states when before halfway point
                    setScale(1);
                    setNoiseProgress(0);
                    setOpacity(1);
                    setShowImage(true);
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                position: 'relative',
                height: '300vh',
                background: '#000',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                }}
            >
                {showImage && (
                    <Box
                        sx={{
                            width: '25vw',
                            height: '25vw',
                            position: 'sticky',
                            top: '50vh',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                        }}
                    >
                        <NoiseImage
                            scale={scale}
                            noiseProgress={noiseProgress}
                            opacity={opacity}
                            imageSrc="/photos/normal-people/1.png"
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
