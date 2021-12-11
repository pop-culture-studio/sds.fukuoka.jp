const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {

    content: [
        './*.html',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"M PLUS Rounded 1c"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
