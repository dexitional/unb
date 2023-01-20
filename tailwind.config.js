/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Open Sans", ...defaultTheme.fontFamily.sans],
      'opensans': ["Open Sans", "sans-serif"],
      "josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      "epilogue": ["Epilogue", ...defaultTheme.fontFamily.sans],
      "inter": ["Inter", ...defaultTheme.fontFamily.sans],
      "jetbrains": ["'JetBrains Mono'","monospace", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
