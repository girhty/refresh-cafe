/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        anchor: '#2C1B10',
        anchorSoft: '#43291A',
        cream: '#FBF2E1',
        creamDark: '#F1E3C7',
        butter: '#FCE9A8',
        butterStrong: '#F6C445',
        pink: '#F6A9C4',
        pinkDark: '#EE84AC',
        lavender: '#CBC2F2',
        lavenderDark: '#A79BE8',
        gold: '#E3AC3B'
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: {
        blob: '48% 52% 58% 42% / 45% 45% 55% 55%'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tilt,0deg))' },
          '50%': { transform: 'translateY(-14px) rotate(var(--tilt,0deg))' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' }
        },
        popIn: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        marqueeRev: 'marqueeRev 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
        popIn: 'popIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards'
      }
    }
  },
  plugins: []
};