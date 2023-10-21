/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        //vw
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        //vh
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
