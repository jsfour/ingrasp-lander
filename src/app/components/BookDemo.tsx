import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import SectionHeader from './Header';

export default function BookDemo({ href = "/demo" }: { href?: string }) {
    const router = useRouter();

    return (
        <Box
            sx={{
                py: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.surface',
            }}
        >
            <SectionHeader primaryText="Ready to accelerate your training development?" secondaryText="Book a demo to see how Ingrasp can help you create realistic characters for your training scenarios." />
            <Button
                size="lg"
                onClick={() => router.push(href)}
                sx={{
                    minWidth: 200,
                }}
            >
                Book a Demo
            </Button>
        </Box>
    );
}
