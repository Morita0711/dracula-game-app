const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    important: true,
    theme: {
        screens: {
            desktop: { max: '1440px' },
            laptop: { max: '1024px' },
            tablet: { max: '768px' },
            mobile: { max: '425px' },
        },
        extend: {
            fontFamily: {
                sans: ['EB Garamond', ...defaultTheme.fontFamily.sans], //sans: ['EB Garamond'],
                SpeedRush: ['Speed Rush Regular', 'sans'],
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 300ms ease-in-out',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
    corePlugins: {
        fontFamily: true,
    },
}
