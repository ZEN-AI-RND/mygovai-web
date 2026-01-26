/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        'nvidiaGreen': '#76B900',
        'nvidiaBlue': '#00F0FF',
        'nvidiaDark': '#0B0B0B', // ✅ this defines bg-nvidiaDark
      },
    },
  },
  plugins: [],
};
