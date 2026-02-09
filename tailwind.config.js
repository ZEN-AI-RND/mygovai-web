/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ["Inter", "Roboto", "Arial", "sans-serif"],
  //       display: ["Inter", "Roboto", "Arial", "sans-serif"],
  //       mono: [
  //         "ui-monospace",
  //         "SFMono-Regular",
  //         "Menlo",
  //         "Monaco",
  //         "monospace",
  //       ],
  //       galaxy: ["Orbitron", "sans-serif"],
  //     },
  //     colors: {
  //       nvidiaGreen: "#76B900",
  //       nvidiaBlue: "#00F0FF",
  //       nvidiaDark: "#0B0B0B", // ✅ this defines bg-nvidiaDark
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        nvidiaDark: "#0B0B0B", // or your preferred NVIDIA dark shade
      },
      fontFamily: {
        // galaxy: ["Montserrat", "sans-serif"], // replace with Montserrat if you prefer
        display: ["Poppins", "sans-serif"], // or your Galaxy AI font
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { filter: "drop-shadow(0 0 10px rgba(250,204,21,0.6))" },
          "50%": { filter: "drop-shadow(0 0 30px rgba(250,204,21,1))" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        sparkle: "sparkle 1.5s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
      },
    },
  },

  plugins: [],
};
