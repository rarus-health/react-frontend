const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}",
    "// Add NextUI components path\r\n    ts",
    "jsx",
    "tsx",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|radio|button|ripple|spinner|calendar|date-input|popover).js"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [nextui()],
};
