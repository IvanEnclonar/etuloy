/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#236B51",
        highlight: "#458579",
        highlight_hover: "#245B72",
        background: "#51A98F",
        background_pastel: "#E8F4F0",
        required_red: "#FF0000",
      },
      width: {
        comments: "16.5rem",
      },
    },
  },
  plugins: [],
}

