module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fortx: ["fortx"],
        universal550: ["universal550"],
        universal850: ["universal850"],
      },
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1123px',
        '2xl': '1123px',
      },
    },
    colors: {
      'active-bg-dark': '#1b1b1b',
      'pinkish-orange': '#FF733C',
      'dark-bg-hero': '#5A698C',
      'white': '#fff',
      'shamrock': '#32BE50',
      'dark-mint': '#289B50',
      'slate-blue': '#5A698C',
      'smooth-gray': '#CDD2DC',
    },
  },
  plugins: [],
}