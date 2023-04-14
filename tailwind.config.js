/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#965cff",
          secondary: "#4bbe96",
          accent: "#ffea2f",

          neutral: "#bababa",

          "base-100": "#202020",

          info: "#cffafe",

          success: "#d1fae5",

          warning: "#fef9c3",

          error: "#fee2e2",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
