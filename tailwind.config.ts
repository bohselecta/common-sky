import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#8CC5FF",
        cream: "#F2D6C9",
        sand: "#D9A07D",
        clay: "#A15D3E",
        umber: "#5C2D21",
        olive: "#7FA36E"
      }
    }
  },
  plugins: []
};
export default config;
