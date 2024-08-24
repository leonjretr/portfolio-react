/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            margin: {
                "0.2": "0.125rem",
                "0.25":"0.175rem",
                "0.3": "0.2rem",
            },
            fontFamily: {
                niceFont: ['Lora'],
                niceFontSec: ['Merriweather'],
                poppinsFont: ['Poppins'],
                interFont: ['Inter'],
                terminalFont: ['Fira Code'],
            },
            colors: {
                mainColor: "#e5e7eb",
                greenNew: "#50B9A6",
                greenDark: "#29665B",
                amateurColor: "#F4BB44",
                bgDarkColor: "#221F1F",
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
                'mob1': '385px',
                'mob2': '450px',
                'mob3': '540px'
            },
            fontSize: {
                xxs: "0.5rem"
            }
        },
    },
    plugins: [],
}

// #F9F6EE