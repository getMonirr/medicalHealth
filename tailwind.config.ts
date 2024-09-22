import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "med-white": "#ffffff",
        "med-primary": "#03ACF2",
        "med-primary-light": "#B3E5FC",
        "med-primary-dark": "#00579b",
        "med-text": "#000000de",
        "med-text-light": "#0000008a",
        "med-green": "#4CAF50",
      },
    },
  },
  plugins: [],
};
export default config;
