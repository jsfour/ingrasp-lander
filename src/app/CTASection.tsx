import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Select,
    Option,
    Button,
    Card,
} from '@mui/joy';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';

interface FormData {
    name: string;
    email: string;
    organization: string;
    plan: 'annual' | 'monthly';
}

const CharacterGreeting = ({ name }: { name: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Box
            component="img"
            src={name ? "/character-wave.png" : "/character-neutral.png"}
            alt="Character illustration"
            sx={{
                width: '80%',
                maxWidth: 300,
                height: 'auto',
            }}
        />
        {name && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    background: 'white',
                    padding: '12px 20px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                <Typography level="body-lg">
                    Hi {name}! 👋
                </Typography>
            </motion.div>
        )}
    </motion.div>
);

const PlanPresentation = ({ plan }: { plan: 'annual' | 'monthly' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
    >
        <Box
            component="img"
            src={plan === 'annual' ? "/character-annual.png" : "/character-monthly.png"}
            alt="Plan presentation"
            sx={{
                width: '80%',
                maxWidth: 300,
                height: 'auto',
            }}
        />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
                textAlign: 'center',
                marginTop: '16px',
            }}
        >
            <Typography level="body-lg" sx={{ color: 'primary.500' }}>
                {plan === 'annual' ? 'Great choice! Save 16%' : 'Flexible monthly plan'}
            </Typography>
        </motion.div>
    </motion.div>
);

const ProgressIndicator = ({ step }: { step: number }) => (
    <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
        {[1, 2, 3, 4].map((i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{
                    opacity: i <= step ? 1 : 0.3,
                    scale: i === step ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                    width: '25%',
                    height: '4px',
                    background: i <= step ? 'var(--joy-palette-primary-500)' : '#e0e0e0',
                    borderRadius: '2px',
                }}
            />
        ))}
    </Box>
);

export default function CTASection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        organization: '',
        plan: 'annual',
    });

    const getStep = () => {
        if (!formData.name) return 1;
        if (!formData.email) return 2;
        if (!formData.organization) return 3;
        return 4;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <Box
            sx={{
                py: 8,
                background: 'linear-gradient(180deg, #fff 0%, #f5f5f5 100%)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        level="h1"
                        sx={{
                            textAlign: 'center',
                            mb: 2,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Ready to Transform Your Stories?
                    </Typography>
                    <Typography
                        level="body-lg"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                        }}
                    >
                        Get started for $50/month and access infinite characters, custom scenes, and storytelling power like never before.
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 6,
                        alignItems: 'center',
                    }}
                >
                    {/* Form Section */}
                    <Card
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            flex: 1,
                            maxWidth: 500,
                            width: '100%',
                            p: 4,
                        }}
                    >
                        <ProgressIndicator step={getStep()} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    startDecorator={<PersonIcon />}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    startDecorator={<EmailIcon />}
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Organization</FormLabel>
                                <Input
                                    startDecorator={<BusinessIcon />}
                                    value={formData.organization}
                                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                    placeholder="Your company or organization"
                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Select Plan</FormLabel>
                                <Select
                                    startDecorator={<PaymentIcon />}
                                    value={formData.plan}
                                    onChange={(_, value) => value && setFormData({ ...formData, plan: value as 'annual' | 'monthly' })}
                                    required
                                >
                                    <Option value="annual">Annual ($50/mo, billed annually)</Option>
                                    <Option value="monthly">Monthly ($60/mo)</Option>
                                </Select>
                            </FormControl>

                            <Button type="submit" size="lg">
                                Start My Free Trial
                            </Button>
                        </Box>
                    </Card>

                    {/* Character Illustration */}
                    <Box
                        sx={{
                            flex: 1,
                            display: { xs: 'none', md: 'block' },
                            height: 500,
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {!formData.plan ? (
                                <CharacterGreeting key="greeting" name={formData.name} />
                            ) : (
                                <PlanPresentation key="plan" plan={formData.plan} />
                            )}
                        </AnimatePresence>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
} 