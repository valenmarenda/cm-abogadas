/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3D3E",
          dark: "#0B2E2F",
          light: "#145052",
        },
        accent: "#6BBF8E",
        carbon: "#1F2937",
        light: "#F3F4F6",
        gold: "#C3A76E",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
