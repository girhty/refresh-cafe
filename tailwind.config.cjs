/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Role-based palette tokens
        anchor: {
          DEFAULT: '#2E1A11', // Deep chocolate brown
          light: '#4A2E20',
        },
        base: {
          DEFAULT: '#FDF8F0', // Warm cream / off-white
          warm: '#F5EBE0',    // Warmer cream for Craft section
        },
        butter: {
          DEFAULT: '#FCD34D', // Soft buttery yellow (Primary Accent tint)
          strong: '#F59E0B',  // Stronger golden for buttons
        },
        pop1: {
          DEFAULT: '#F472B6', // Bubblegum pink
        },
        pop2: {
          DEFAULT: '#A78BFA', // Periwinkle lavender
        },
        star: {
          DEFAULT: '#FBBF24', // Gold
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        label: ['Space Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'hard-pink': '12px 12px 0px 0px #F472B6',
        'hard-dark': '8px 8px 0px 0px #2E1A11',
        'hard-cream': '8px 8px 0px 0px #FDF8F0',
        'float': '0 20px 40px rgba(46, 26, 17, 0.15)',
      },
      borderRadius: {
        'card': '24px',
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'pop-in': 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};