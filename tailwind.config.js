/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('/public/10556823_19862.jpg')",
      }

    },
  },
  plugins: [require("daisyui")],
}
