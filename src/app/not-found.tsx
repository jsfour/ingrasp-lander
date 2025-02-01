import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import MainLayout from './components/MainLayout';

export default function PageNotFound() {
    return (
        <MainLayout>
            <Box
                sx={{
                    py: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}
            >
                <Typography level="h1" sx={{ fontSize: '4rem', mb: 2 }}>
                    404
                </Typography>
                <Typography level="h2" sx={{ mb: 2 }}>
                    Page Not Found
                </Typography>
                <Typography sx={{ mb: 4, textAlign: 'center' }}>
                    Oops! The page you're looking for doesn't exist. Let's get you back home.
                </Typography>
                <Button
                    component={Link}
                    href="/"
                    size="lg"
                    sx={{
                        minWidth: 200,
                    }}
                >
                    Return Home
                </Button>
            </Box>
        </MainLayout>
    );
}
