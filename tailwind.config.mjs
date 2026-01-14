/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm, organic palette inspired by Maggie Appleton
        cream: '#FFFEF2',
        sand: '#F5F1E8',
        sage: '#B8C5B0',
        forest: '#4A5D4F',
        clay: '#D4A574',
        rust: '#C97749',
        ink: '#2B2B2B',

        // Accent colors
        sky: '#A8C5E0',
        lavender: '#C5B3D9',
        peach: '#FFD4BA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: '#2B2B2B',
            lineHeight: '1.75',
            a: {
              color: '#4A5D4F',
              textDecoration: 'underline',
              textDecorationColor: '#D4A574',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#C97749',
                textDecorationColor: '#C97749',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'Merriweather, Georgia, serif',
              fontWeight: '700',
              color: '#2B2B2B',
            },
            h1: {
              fontSize: '2.5rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '2rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#B8C5B0',
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              color: '#4A5D4F',
            },
            code: {
              fontFamily: 'Space Mono, monospace',
              backgroundColor: '#F5F1E8',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'wiggle': 'wiggle 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
