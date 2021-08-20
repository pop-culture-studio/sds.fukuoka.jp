const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    // mode: 'jit',
    purge: [
        './*.html',
    ],

    // theme: {
    //     extend: {
    //         fontFamily: {
    //             sans: ['Nunito', ...defaultTheme.fontFamily.sans],
    //         },
    //     },
    // },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};