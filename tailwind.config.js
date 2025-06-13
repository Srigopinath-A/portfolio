/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // CORRECT: Changed '"Phonk Sans"' to '"Phonk"' to match the actual font name
        sans: ['"Phonk"', 'system-ui', 'sans-serif'], 
        
        // Other fonts are fine
        serif: ['"Source Serif Pro"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'krona-one': ['"Krona One"', 'sans-serif'],
      },
      // ... the rest of your config is fine
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500', 
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};