module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#fcfeff',
        'steelblue': {
          '100': '#518cab',
          '200': '#518caa',
          '300': '#286280'
        },
        'white': '#fff',
        'darkslategray': {
          '100': '#0c3d55',
          '200': 'rgba(12, 61, 85, 0.8)',
          '50':  'rgba(252, 254, 255, 0.9)'
        },
        'slategray': '#3c6477'
      },
      spacing: {},
      fontFamily: {
        'Poppins': 'Poppins',
        'inter': 'Inter'
      },
      borderRadius: {
        '3xs': '10px',
        '4xl': '23px',
        '21xl': '40px',
        '6xl': '25px'
      }
    },
    fontSize: {
      'sm': '14px',
      'base': '16px',
      'mini': '15px',
      '21xl': '40px',
      'xl': '20px',
      'inherit': 'inherit'
    }
  },
  corePlugins: {
    'preflight': false
  }
}