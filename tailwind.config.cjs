/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        anchor: {
          DEFAULT: '#2A170D',
          soft: '#3A2519',
          muted: '#5A3D2B'
        },
        cream: {
          DEFAULT: '#FDF8F0',
          warm: '#F7EEDF',
          dark: '#EFE3CF'
        },
        butter: {
          DEFAULT: '#F6D06B',
          light: '#FBE7A5',
          dark: '#E7B823'
        },
        pinkpop: '#F7A0B2',
        lavenderpop: '#A6A1E8',
        star: '#FFC531'
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      boxShadow: {
        hard: '6px 6px 0 0 #2A170D',
        'hard-pink': '10px 10px 0 0 #F7A0B2',
        'hard-lavender': '10px 10px 0 0 #A6A1E8',
        soft: '14px 18px 40px rgba(42, 23, 13, 0.16)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeR: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-10px) rotate(var(--tilt, 0deg))' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-6deg)' }
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeR 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 0.4s ease-in-out'
      }
    }
  },
  plugins: []
};