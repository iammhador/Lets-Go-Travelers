/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ae24d",
          secondary: "#156384",
          accent: "#63b5cc",
          neutral: "#201C26",
          "base-100": "#EEEDEE",
          info: "#AAC7EE",
          success: "#6EE7DB",
          warning: "#C56607",
          error: "#EE4F49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
