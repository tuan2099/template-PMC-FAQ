/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#a03717", // Thêm một màu tùy chỉnh
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ht-container": {
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "0 20px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
