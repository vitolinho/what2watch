/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        hind : ["var(--font-hind)"]
      },
      colors: {
        "text-50": "#ffffff",
        "text-100": "#fefefe",
        "text-200": "#fdfdfd",
        "text-300": "#fcfcfc",
        "text-400": "#fcfcfc",
        "text-500": "#fbfbfb",
        "text-600": "#e4e4e4",
        "text-700": "#b2b2b2",
        "text-800": "#8a8a8a",
        "text-900": "#696969",
        "background-50": "#e6e6e7",
        "background-100": "#b0b2b5",
        "background-200": "#8a8d91",
        "background-300": "#54595e",
        "background-400": "#33393f",
        "background-500": "#00070f",
        "background-600": "#00060e",
        "background-700": "#00050b",
        "background-800": "#000408",
        "background-900": "#000306",
        "primary-50": "#eaf4ff",
        "primary-100": "#bfdefe",
        "primary-200": "#a0cdfe",
        "primary-300": "#74b7fe",
        "primary-400": "#59a9fd",
        "primary-500": "#3093fd",
        "primary-600": "#2c86e6",
        "primary-700": "#2268b4",
        "primary-800": "#1a518b",
        "primary-900": "#143e6a",
        "secondary-50": "#e6e8eb",
        "secondary-100": "#b0b8bf",
        "secondary-200": "#8a95a1",
        "secondary-300": "#556576",
        "secondary-400": "#34475b",
        "secondary-500": "#011932",
        "secondary-600": "#01172e",
        "secondary-700": "#011224",
        "secondary-800": "#010e1c",
        "secondary-900": "#000b15"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}