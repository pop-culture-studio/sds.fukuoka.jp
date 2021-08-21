const mix = require('laravel-mix');
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'assets/js')
    .postCss('resources/css/app.css', 'assets/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .copy('./index.html', 'public')
    .copyDirectory('images', 'public/images')
    .copyDirectory('assets', 'public/assets')
    // .after(webpackStats => {
    //     fs.unlinkSync('mix-manifest.json')
    // })
    .disableNotifications();