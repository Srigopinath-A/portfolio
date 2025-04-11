/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'Krona+One': 'Krona+One'
      },
      fontWeight: {
        // Add specific font weights if needed
        light: 300,
        normal: 400,
        semiBold: 700,
        bold: 1000,
      },
    },
  },
  plugins: [],
}

