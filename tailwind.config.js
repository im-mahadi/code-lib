/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // flowbite
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  darkMode: 'class',
  plugins: [require("flowbite/plugin"), require('prettier-plugin-tailwindcss')],
};
