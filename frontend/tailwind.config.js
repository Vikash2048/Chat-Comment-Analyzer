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
<<<<<<< HEAD
  plugins: [require("daisyui")],
}

=======
  plugins: [],
  style: {}
}
>>>>>>> 706bf8535a7aa38b6eb037a569f0e7b3911d926d
