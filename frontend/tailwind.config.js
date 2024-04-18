/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "averia": ["Averia Serif Libre", "serif"],
        "bree": ["Bree Serif", "serif"],
        // "ubuntu": ["Ubuntu Mono", "monospace"],
        // "popin": ["Mochiy Pop P One", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

