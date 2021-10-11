module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        danger: '#dc3545',
        dark: '#333333',
        light: '#f4f4f4',
        success: '#28a745',
      },
      fontFamily: {
        ssp: ['Source Sans Pro'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
