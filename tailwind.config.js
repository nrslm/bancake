module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 35px 35px rgba(242, 242, 242, 0.25)',
        '4xl': [
            '0 35px 35px rgba(242, 242, 242, 0.25)',
            '0 45px 65px rgba(242, 242, 242, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

