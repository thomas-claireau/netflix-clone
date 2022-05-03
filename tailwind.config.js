module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mini: '375px',
      },
      backgroundImage: {
        hero: 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)',
      },
    },
    colors: {
      transparent: 'transparent',
      dark: '#000',
      light: '#f6f6f4',
      red: '#e30b13',
      blue: '#0170eb',
      gray: {
        100: '#a2a2a2',
        600: '#303030',
      },
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.100', 'currentColor'),
    }),
  },
  plugins: [],
};
