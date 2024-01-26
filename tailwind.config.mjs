/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "0.5px",
      },
      width: {
        def: "555px",
        ref: "350px",
      },
      height: {
        def: "555px",
        ref: "350px",
      },
      fontFamily: {
        FS: "FS",
        SM: "SM",
      },
      fontSize: {
        primary: "7.5rem",
      },
      letterSpacing: {
        tight: "-0.5rem",
      },
      lineHeight: {
        tight: "0.8",
      },
    },
  },
  plugins: [],
};
