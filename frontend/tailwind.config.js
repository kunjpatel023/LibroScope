// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#4e8cff',
//           50: '#eaf3ff'
//         },
//         bg: {
//           light: '#f5f7fb',
//           dark: '#0b1220'
//         }
//       }
//     }
//   },
//   plugins: [require('@tailwindcss/forms')],
// }
/** /**
 @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourgummy: ["Sour Gummy", "serif"],
      },
      borderRadius: {
        '5xl': '3rem',   // 48px
        '6xl': '4rem',   // 64px
        '7xl': '6rem',   // 96px
      },
    },
  },
  plugins: [],
}
