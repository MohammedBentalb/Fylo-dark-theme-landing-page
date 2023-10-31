/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      screens: {
        min: '400px',
      },
      colors: {
        cyan: 'var(--cyan)',
        darkBlue: 'var(--blue)',
        darkblue: 'var(--darkbleu)',
        testimonial: 'var(--testimonial)',
        footer: 'var(--footer)',
        mainBg: 'var(--mainBg)',
        signBg: 'var(--signBg)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        raleway: 'var(--font-raleway)',
      },
    },
  },
  plugins: [],
};
