const theme = require('./src/lib/theme.json')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: theme.colors
        }
    },
    plugins: [
    ]
}
