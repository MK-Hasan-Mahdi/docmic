/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          accent: "#575757",
          neutral: "#1E1E1E",
          "base-100": "#ffffff",
          info: "#E5E5E5",
          success: "#009444",
          warning: "#DF7E07",
          error: "#FF4545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}