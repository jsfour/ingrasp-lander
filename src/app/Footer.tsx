import { motion } from 'framer-motion';
import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/joy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { loginLink, demoLink } from './constants/link-urls';

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
    <Link
        href={href}
        sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            '&:hover': {
                color: 'primary.500',
                transform: 'translateY(-2px)',
            },
        }}
    >
        {children}
    </Link>
);

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant="plain"
        color="neutral"
        size="sm"
        aria-label={label}
        sx={{
            transition: 'all 0.2s ease',
            '&:hover': {
                transform: 'translateY(-2px)',
                color: 'primary.500',
                backgroundColor: 'transparent',
            },
        }}
    >
        {icon}
    </IconButton>
);

const AnimatedBackground = () => (
    <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
            opacity: 0.5,
        }}
    >
        <motion.div
            animate={{
                background: [
                    'linear-gradient(45deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)',
                    'linear-gradient(45deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
                    'linear-gradient(45deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)',
                ],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
            }}
            style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                right: '-50%',
                bottom: '-50%',
                transform: 'rotate(-45deg)',
            }}
        />
    </Box>
);

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                py: 6,
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '2fr 1fr 1fr 1fr',
                        },
                        gap: 4,
                        mb: 4,
                    }}
                >
                    {/* Brand Column */}
                    <Box>
                        <Typography level="h4" sx={{ mb: 2 }}>
                            Ingrasp
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 2 }}>
                            Transform your stories with advanced character generation and scene building.
                        </Typography>
                        { /* <Box sx={{ display: 'flex', gap: 1 }}>
                            <SocialButton
                                href="https://linkedin.com/company/ingrasp"
                                icon={<LinkedInIcon />}
                                label="LinkedIn"
                            />
                            <SocialButton
                                href="https://twitter.com/ingrasp"
                                icon={<TwitterIcon />}
                                label="Twitter"
                            />
                            <SocialButton
                                href="https://github.com/ingrasp"
                                icon={<GitHubIcon />}
                                label="GitHub"
                            /> 
                        </Box> */}
                    </Box>

                    {/* Quick Links */}
                    <Box>
                        <Typography level="title-lg" sx={{ mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {/* <FooterLink href="/about">About</FooterLink> */}
                            <FooterLink href="/faq">FAQ</FooterLink>
                            {/* <FooterLink href="/privacy">Privacy Policy</FooterLink> */}
                            {/* <FooterLink href="/terms">Terms of Service</FooterLink> */}
                        </Box>
                    </Box>

                    {/* Contact */}
                    <Box>
                        <Typography level="title-lg" sx={{ mb: 2 }}>
                            Contact
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon sx={{ fontSize: 'sm', color: 'text.secondary' }} />
                                <Link
                                    href="mailto:sales@ingrasp.ai"
                                    sx={{ color: 'text.secondary', textDecoration: 'none' }}
                                >
                                    support@getingrasp.com
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* Newsletter 
                    <Box>
                        <Typography level="title-lg" sx={{ mb: 2 }}>
                            Stay Updated
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 2 }}>
                            Join our newsletter for product updates and AI storytelling tips.
                        </Typography>
                        <Link
                            href="/newsletter"
                            sx={{
                                color: 'primary.500',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Subscribe →
                        </Link>
                    </Box>*/}
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Copyright */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                    }}
                >
                    <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                        © 2024 Ingrasp. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <FooterLink href={loginLink}>Sign In</FooterLink>
                        <FooterLink href={demoLink}>Book Demo</FooterLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
} 