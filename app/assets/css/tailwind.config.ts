/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albert_sans: ["Albert Sans", "ui-sans-serif", "system-ui"],
        space_grotesk: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        hector: ["Hector", "ui-sans-serif", "system-ui"],
      },
    },
    screens: {
      mobile: { max: "769px" },
      tablet: { min: "770px", max: "1439px" },
      desktop: { min: "1440px" },
    },
  },
};
