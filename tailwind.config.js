/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                niceFont: ['Lora'],
                niceFontSec: ['Merriweather'],
                poppinsFont: ['Poppins'],
                interFont: ['Inter'],
                terminalFont: ['Fira Code'],
            },
            colors: {
                mainColor: "#e5e7eb",
            },
            spacing: {
                "88": "22rem",
                "110": "28rem",
                "120": "32rem",
                "130": "36rem",
                "140": "40rem",
                "150": "44rem",
            },
            screens: {
                'mob1': '375px',
                'mob2': '450px',
                'mob3': '540px'
            },
        },
    },
    plugins: [],
}

// #F9F6EE