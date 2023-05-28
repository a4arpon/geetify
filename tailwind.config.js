/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        geetify: {
          primary: '#4ade80',
          secondary: '#34d399',
          accent: '#a5b4fc',
          neutral: '#4b5563',
          'base-100': '#292524',
          info: '#d8b4fe',
          success: '#3b82f6',
          warning: '#fde047',
          error: '#EE6381',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
