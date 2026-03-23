/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#131314",
        "on-primary-container": "#006970",
        "on-secondary-fixed-variant": "#7000a7",
        "on-background": "#e5e2e3",
        "inverse-surface": "#e5e2e3",
        "on-surface-variant": "#b9cacb",
        "secondary-container": "#ad00fe",
        "secondary-fixed-dim": "#e5b4ff",
        "on-error": "#690005",
        "inverse-primary": "#006970",
        "on-tertiary-fixed-variant": "#45464e",
        "surface-container-low": "#1c1b1c",
        "outline-variant": "#3b494b",
        "on-error-container": "#ffdad6",
        "on-tertiary": "#2e3037",
        "on-secondary-container": "#fef0ff",
        "error": "#ffb4ab",
        "primary-container": "#00f0ff",
        "tertiary-fixed-dim": "#c5c6ce",
        "background": "#131314",
        "tertiary-fixed": "#e2e2eb",
        "surface-bright": "#3a393a",
        "on-tertiary-container": "#5d5e66",
        "primary": "#dbfcff",
        "surface-tint": "#00dbe9",
        "inverse-on-surface": "#313031",
        "outline": "#849495",
        "on-secondary": "#4f0077",
        "surface": "#131314",
        "primary-fixed-dim": "#00dbe9",
        "error-container": "#93000a",
        "secondary": "#e5b4ff",
        "on-primary-fixed-variant": "#004f54",
        "secondary-fixed": "#f5d9ff",
        "tertiary": "#f6f5fe",
        "on-tertiary-fixed": "#191b22",
        "surface-container": "#201f20",
        "surface-container-lowest": "#0e0e0f",
        "on-primary": "#00363a",
        "primary-fixed": "#7df4ff",
        "on-primary-fixed": "#002022",
        "on-surface": "#e5e2e3",
        "surface-container-highest": "#353436",
        "tertiary-container": "#d9d9e2",
        "surface-variant": "#353436",
        "surface-container-high": "#2a2a2b",
        "on-secondary-fixed": "#30004b"
      },
      fontFamily: {
        "headline": ["Sora", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'parallax': 'parallax 5s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'glimmer': 'glimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        parallax: {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glimmer: {
          '0%, 100%': { opacity: '0.3', filter: 'brightness(1)' },
          '50%': { opacity: '0.6', filter: 'brightness(1.5)' },
        }
      }
    },
  },
  plugins: [],
}
