/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-cyan": "hsl(174, 77%, 80%)", //slider Bar
        "strong-cyan": "hsl(174, 86%, 45%)", //slider bg
        "grayish-red": "hsl(14, 92%, 95%)", //discount bg
        "light-red": "hsl(15, 100%, 70%)", // dicsount text
        "pale-blue": "hsl(226, 100%, 87%)", // cta text
        "pale-white": "hsl(230, 100%, 99%) ", //Main bg
        "grayish-white": "hsl(224, 65%, 95%)", //Empty Bar
        "light-blue": "hsl(223, 50%, 87%)", //Toggle Bg
        "grayish-blue": "hsl(225, 20%, 60%)", //Text
        "desaturated-blue": "hsl(227, 35%, 25%)", //CTA Bg
      },
      backgroundImage: {
        pattern: "url('../images/bg-pattern.svg')",
        circle: "url('../images/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
