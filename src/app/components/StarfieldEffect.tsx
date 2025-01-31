import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/joy';

interface Star {
    x: number;
    y: number;
    z: number;
    px?: number;
    py?: number;
}

interface StarfieldEffectProps {
    isActive: boolean;
    isClicked: boolean;
}

export default function StarfieldEffect({ isActive, isClicked }: StarfieldEffectProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stars, setStars] = useState<Star[]>([]);
    const speedRef = useRef(0);
    const requestRef = useRef<number>();
    const lastTimeRef = useRef<number>();
    const [scale, setScale] = useState(1);

    // Initialize stars
    useEffect(() => {
        const initStars = () => {
            const newStars: Star[] = [];
            // Reduce number of stars for mobile devices
            const starCount = window.innerWidth < 768 ? 200 : 400;
            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    x: Math.random() * 2000 - 1000,
                    y: Math.random() * 2000 - 1000,
                    z: Math.random() * 2000,
                });
            }
            setStars(newStars);
        };

        initStars();
    }, []);

    // Animation loop
    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = (time: number) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = time;
            }
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;

            // Update speed based on isActive and isClicked
            const targetSpeed = isClicked ? 200 : (isActive ? 50 : 0);
            // Double the acceleration rate for hover state (0.001 -> 0.002)
            const speedDelta = isClicked ? deltaTime * 0.005 : (isActive ? deltaTime * 0.002 : deltaTime * 0.003);
            speedRef.current = Math.min(
                targetSpeed,
                speedRef.current + (targetSpeed > speedRef.current ? speedDelta : -speedDelta)
            );

            // Clear canvas with semi-transparent black
            const alpha = isClicked ? 0.05 : 0.1;
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Calculate scale based on screen size
            const baseScale = Math.min(canvas.width, canvas.height) / 1000;
            const scaleFactor = baseScale * 500;

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.lineWidth = isClicked ? 2 : 1.5;
            ctx.beginPath();

            stars.forEach((star) => {
                star.z -= speedRef.current;

                if (star.z <= 0) {
                    star.z = 2000;
                    star.x = Math.random() * 2000 - 1000;
                    star.y = Math.random() * 2000 - 1000;
                    star.px = undefined;
                    star.py = undefined;
                }

                // Apply screen-size-aware scaling
                const x = (star.x / star.z) * scaleFactor + centerX;
                const y = (star.y / star.z) * scaleFactor + centerY;

                if (star.px !== undefined && star.py !== undefined) {
                    ctx.moveTo(x, y);
                    ctx.lineTo(star.px, star.py);
                }

                star.px = x;
                star.py = y;
            });

            ctx.stroke();

            requestRef.current = requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Update scale on resize
            setScale(Math.min(window.innerWidth, window.innerHeight) / 1000);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [stars, isActive, isClicked]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                background: isClicked ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 1)',
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: isActive || isClicked ? 1 : 0,
                backgroundColor: isClicked ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 1)'
            }}
            transition={{ duration: isClicked ? 0.3 : 0.5 }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </motion.div>
    );
} 