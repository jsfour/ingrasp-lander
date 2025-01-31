'use client';
import * as React from 'react';
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "../theme";
import FloatingNav from './FloatingNav';
import Footer from '../Footer';

interface MainLayoutProps {
    children: React.ReactNode;
    hideNav?: boolean;
}

export default function MainLayout({ children, hideNav = false }: MainLayoutProps) {
    const [showNav, setShowNav] = React.useState(false);

    React.useEffect(() => {
        if (hideNav) return;

        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            setShowNav(scrollPosition > heroHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hideNav]);

    return (
        <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
            <CssBaseline />
            {!hideNav && <FloatingNav visible={showNav} />}
            <Box
                sx={{
                    minHeight: "100vh",
                    overflowX: "hidden",
                }}
            >
                {children}
                <Footer />
            </Box>
        </CssVarsProvider>
    );
} 