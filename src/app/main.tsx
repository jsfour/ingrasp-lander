"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import IconButton from "@mui/joy/IconButton";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import framesxTheme from "./theme";
import HeroLeft01 from "./hero-left";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "1rem",
        right: "1rem",
        borderRadius: "50%",
        boxShadow: "sm",
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Main() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          "& > div": {
            scrollSnapAlign: "start",
          },
        }}
      >
        <HeroLeft01
          header="Workforce reskilling"
          primary="Ingrasp"
          secondary="Our Mission is to dramatically reduce the cost of training the workforce"
          button="Schedule A Demo"
          href="mailto:founders@ingrasp.ai"
        />
      </Box>
    </CssVarsProvider>
  );
}
