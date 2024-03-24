/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6abe52",
                secondary: "#21212D",
            },
            fontFamily: {
                "Overlock SC": "Overlock SC",
                "Caveat": "Caveat",
                "Poppins": "Poppins",

            },
        },
    },
    plugins: [],
};
