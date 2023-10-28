/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayOne: "var(--gray)",
        textColor: "var(--text-color)",
        bgColor: "var(--one)",
      },
    },
  },
  plugins: [],
};
