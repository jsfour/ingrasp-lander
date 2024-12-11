"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "./theme";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ProductSection from "./ProductSection";
import DifferentiatorsSection from "./DifferentiatorsSection";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import { NormalPeopleCarousel } from './components/NormalPeopleCarousel';
import LogoStrip from './components/LogoStrip';

export default function Main() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <LogoStrip />
        <ProblemSection />
        <NormalPeopleCarousel />
        <ProductSection />
        <DifferentiatorsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </Box>
    </CssVarsProvider>
  );
}
