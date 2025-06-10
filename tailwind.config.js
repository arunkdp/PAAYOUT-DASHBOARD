/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
    ],
    corePlugins: {
      preflight: false
  },  
    darkMode: 'class',
  
    theme: {
      extend: {
        colors: {
        },
        fontFamily: {
          Yeseva: ["Yeseva One", "cursive"],
        },
      },
      fontFamily: {
        'body': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      }
    },
    plugins: [],  
  }
  