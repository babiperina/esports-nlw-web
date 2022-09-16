/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 10.08%, #43E7AD 85.94%, #E1D55D 10.57%)',
      },
    },
  },
  plugins: [
  ],
}
