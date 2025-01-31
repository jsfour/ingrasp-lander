'use client';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import MainLayout from '../components/MainLayout';

export default function DemoPage() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <MainLayout hideNav={true}>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'background.surface',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        maxWidth: '50%',
                        p: 8,
                    }}
                >
                    <Typography level="h1">
                        Transform Your Content Creation
                    </Typography>

                    <Typography level="body-lg" sx={{ mb: 2 }}>
                        Join the growing number of companies that are revolutionizing their content creation process. Our platform helps you:
                    </Typography>

                    <Stack spacing={2} sx={{ ml: 2 }}>
                        <Typography startDecorator="✓" sx={{ color: 'success.500' }}>
                            Reduce content creation costs by up to 80%
                        </Typography>
                        <Typography startDecorator="✓" sx={{ color: 'success.500' }}>
                            Create professional-quality content in minutes, not hours
                        </Typography>
                        <Typography startDecorator="✓" sx={{ color: 'success.500' }}>
                            Scale your content production effortlessly
                        </Typography>
                        <Typography startDecorator="✓" sx={{ color: 'success.500' }}>
                            Access our library of customizable templates
                        </Typography>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        maxWidth: '50%',
                        p: 8,
                        bgcolor: 'background.level1',
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography level="h2" sx={{ mb: 4 }}>
                        Book Your Demo
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={3}
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                                mx: 'auto',
                                p: 3,
                                borderRadius: 'lg',
                                bgcolor: 'background.surface',
                                boxShadow: 'sm',
                            }}
                        >
                            <FormControl required>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                />
                            </FormControl>

                            <FormControl required>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                />
                            </FormControl>

                            <FormControl required>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </FormControl>

                            <FormControl required>
                                <FormLabel>Company</FormLabel>
                                <Input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter your company name"
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                size="lg"
                                sx={{
                                    mt: 2,
                                    bgcolor: 'primary.500',
                                    '&:hover': {
                                        bgcolor: 'primary.600',
                                    }
                                }}
                            >
                                Schedule Demo
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </MainLayout>
    );
} 