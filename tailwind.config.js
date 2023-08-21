/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            strong: {
              color: theme('colors.gray.600')
            },
            a: {
              color: theme('colors.gray.600')
            },
            code: {
              color: theme('colors.gray.600')
            },
            li: {
              '&::marker': {
                color: theme('colors.gray.500')
              }
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
