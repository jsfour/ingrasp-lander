'use client';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { demoLink } from '../constants/link-urls';

interface FloatingNavProps {
    visible: boolean;
}

export default function FloatingNav({ visible }: FloatingNavProps) {
    const router = useRouter();

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bgcolor: 'background.surface',
                borderBottom: '1px solid',
                borderColor: 'divider',
                backdropFilter: 'blur(20px)',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease',
                zIndex: 1000,
                boxShadow: visible ? 'sm' : 'none',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 4,
                    py: 2,
                    maxWidth: '1200px',
                    mx: 'auto',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box component="img" src="/ingrasp-lockup.png" alt="Logo" sx={{ height: 32 }} />
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => router.push("https://app.getingrasp.com/login")}
                    >
                        Sign In
                    </Button>
                    <Button
                        onClick={() => router.push(demoLink)}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>
        </Box>
    );
} 