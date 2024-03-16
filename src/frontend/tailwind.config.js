/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'background': '#F0EDED',
        'green-1':'#C7EAC9',
        'green-2':'#B8FA99',
        'green-3':'#67C06B',
        'green-4': '#0B8400',
        'red-1':'#FFAAAA',
        'red-2':'#AF0808',
        'gray-1':'#F2F2F2',
        'gray-2':'#DAD9D9',
        'gray-3':'#C0C0C0',
        'gray-4':'#686868',
        'white':'#FFFFFF',
      },
      boxShadow: {
        'shadow-25': '0 4px 10px 0 rgba(0, 0, 0, 0.25)',
        'shadow-10': '0 4px 10px 0 rgba(0, 0, 0, 0.10)',
      },

      backgroundImage: {
        'arts': "url('/src/assets/artsBG.svg')",
        'sports': "url('/src/assets/sportsBG.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

