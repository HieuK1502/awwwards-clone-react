/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Thay 'Nunito' bằng tên font bạn sử dụng
      },
      backgroundImage: {
        "hero-pattern": "url(./assets/img/submit.jpg)",
      },
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
};
