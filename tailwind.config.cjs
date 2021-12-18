const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.gray.200'),
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.200'),
            },
            'ol > li::before': {
              color: theme('colors.gray.300'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.pink.400'),
            },
          },
        },
      }),
    },
  },
  // Only add this if you installed the TailwindCSS-plugins:
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

module.exports = config;
