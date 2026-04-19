import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        robot: {
          blue: '#61a3ff',
          darkBlue: '#1e63c4',
          glow: '#a7d8ff',
        },
        human: {
          green: '#61dfa0',
          darkGreen: '#2f9258',
          glow: '#a7ffce',
        },
        workspace: {
          peach: '#ffcfab',
          lightPeach: '#ffdec5',
        },
        stage: {
          1: '#94a3b8',
          2: '#0ea5e9',
          3: '#f59e0b',
          4: '#14b8a6',
          5: '#10b981',
          6: '#8b5cf6',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
