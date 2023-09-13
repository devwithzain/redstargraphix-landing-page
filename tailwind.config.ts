import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11001c",
        secondry: "#200036",
      },
      fontFamily: {
        jua: ["Jua", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "769px",
      md: "1024px",
      lp: "1270px",
      lg: "1490px",
    },
  },
  plugins: [],
};
export default config;
