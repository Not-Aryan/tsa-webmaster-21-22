module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{html,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
    darkMode: 'class',
};