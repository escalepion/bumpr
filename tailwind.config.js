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
      backgroundImage: {
        'benefits-bg': "url('./assets/images/benefits_bg_2.png')",
        'basket-icon': "url('./assets/images/basket_icon.svg')",
        'secure-icon': "url('./assets/images/secure_icon.svg')",
        'low-icon': "url('./assets/images/low_icon.svg')",
        'customer': "url('./assets/images/customer.png')",
        'car-bg': "url('./assets/images/car-bg.jpg')",
       }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
      },
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
      'pole-grey': '#E6E6E6',
      'disabled-grey': '#737373',
    },
  },
  plugins: [],
}