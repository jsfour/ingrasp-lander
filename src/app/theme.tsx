"use client";
import { extendTheme } from "@mui/joy/styles";
import { inputClasses } from "@mui/joy/Input";

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'dark',
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        background: {
          body: '#0a0a0a',
          surface: '#171717',
          level1: '#262626',
          level2: '#404040',
          level3: '#525252',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        background: {
          body: '#0a0a0a',
          surface: '#171717',
          level1: '#262626',
          level2: '#404040',
          level3: '#525252',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
        },
      },
    },
  },
  fontFamily: {
    body: 'Inter, system-ui, -apple-system, sans-serif',
    display: 'Inter, system-ui, -apple-system, sans-serif',
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === "outlined" && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${theme.vars.palette?.[ownerState.color!]?.outlinedBorder
                }`,
            },
          }),
        }),
        input: {
          caretColor: "var(--Input-focusedHighlight)",
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: '#171717',
          '--Card-padding': '1.5rem',
        },
      },
    },
  },
});
