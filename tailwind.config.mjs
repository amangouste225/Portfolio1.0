/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "0.5px",
      },
      width: {
        def: "520px",
      },
      height: {
        def: "520px",
      },
    },
  },
  plugins: [],
};
