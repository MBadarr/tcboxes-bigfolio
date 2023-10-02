/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                text: ['Inter+Tight', 'sans-serif',]
            },
            colors: {
                'bg-1': '#0A0A0C',
                'bg-2': '#FFF',
                'bg-3': '#EFE9E0',
                'bg-4': '#8A8A8A',
                'bg-5': '#0A0A0C',
                'bg-button': '#1FB895',
            },
        },
    },
    plugins: [],
}