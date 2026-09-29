/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        anchor: '#27170E',         // Rich chocolate brown
        'anchor-light': '#3B2317',
        cream: '#FFFDF9',          // Base light
        'cream-tint': '#FBF6EE',    // Warm tinted background
        butter: '#FFE999',         // Primary Accent
        'butter-gold': '#F5D365',   // Button & CTA gold
        popPink: '#FFAAC9',        // Pop Accent 1 (Bubblegum)
        popLav: '#C5CAFE',         // Pop Accent 2 (Periwinkle)
        starGold: '#F59E0B',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Impact"', '"Arial Black"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'offset-pink': '8px 8px 0px #FFAAC9',
        'offset-pink-lg': '14px 14px 0px #FFAAC9',
        'offset-lav': '8px 8px 0px #C5CAFE',
        'offset-dark': '6px 6px 0px #27170E',
        'offset-butter': '6px 6px 0px #F5D365',
      },
      animation: {
        'marquee-left': 'marquee 25s linear infinite',
        'marquee-right': 'marquee-rev 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
};