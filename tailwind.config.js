/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,tsx,ts,jsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        slate: '#90a1b9',
        zinc: '#9f9fa9',
        stone: '#a6a09b',
        red: '#ff6467',
        redHard: '#ff3a31',
        orange: '#ffb86a',
        amber: '#ffba00',
        yellow: '#ffdf20',
        lime: '#9ae600',
        green: '#05df72',
        emerald: '#00d492',
        teal: '#00d5be',
        cyan: '#bbf7be',
        sky: '#00bcff',
        blue: '#51a2ff',
        indigo: '#a3b3ff',
        violet: '#a684ff',
        purple: '#c27aff',
        fushia: '#f4a8ff',
        pink: '#fda5d5',
        rose: '#ffa1ad',

        white: '#ffffff',
        white50: '#FFFFFF80',
        black: '#000000',
        black50: '#00000080',

        neutral50: '#fafafa',
        neutral100: '#f5f5f5',
        neutral150: '#f0f0f0',
        neutral200: '#e5e5e5',
        neutral300: '#d4d4d4',
        neutral400: '#a1a1a1',
        neutral500: '#737373',
        neutral600: '#4d4d4d',
        neutral700: '#383838',
        neutral750: '#292929',
        neutral800: '#212121',
        neutral850: '#1a1a1a',
        neutral900: '#121212',
        neutral950: '#080808',

        bannerBtn: '#00000033',
        bgTag: '#1F1F1F66',
        transparent: 'transparent'
      },
      gradientColorStops: {
        'button-blue-start': '#0A84FF',
        'button-blue-end': '#3499FE',
        'button-green-start': '#2DCC7C',
        'button-green-end': '#03793E',
        'button-pink-start': '#FF0AB1',
        'button-pink-end': '#FE346A',
        'button-fushia-start': '#FB0AFF',
        'button-fushia-end': '#C106C7',
        'button-lion-start': '#DAA35F',
        'button-lion-end': '#E18344'
      },
      fontFamily: {
        sans: ['NeueHaasUnica', 'sans-serif']
      },
      borderRadius: {
        cta: '20px'
      }
    }
  },
  plugins: []
}
