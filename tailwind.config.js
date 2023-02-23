/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      default: '#292738',
      card: '#363447',
      ellipse: '#D9D9D9',
      lime: '#81FBB8',
      linearPurple: 'linear-gradient(121.94deg, #CE9FFC 15.98%, #7367F0 82.85%)',  
      linearFucsia: 'linear-gradient(121.94deg, #DF9780 15.98 %, #A66DE9 82.85 %)',
      barLime: 'linear-gradient(180deg, #90F7EC 0%, #32CCBC 100%)',
    },
    extend: {
      boxShadow: {
        'dashBoard': '3px 4px 26px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
