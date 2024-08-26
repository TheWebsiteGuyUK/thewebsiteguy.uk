/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
	fontFamily: {
		'sans': ['Montserrat', 'sans-serif'],
	  },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#a991f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#D81B60', // Slightly darker pink
          secondary: '#6A1B9A', // Slightly lighter purple
          accent: '#F2CE1B', // Darker yellow
          neutral: '#6B7280', // Lighter gray
          'base-100': '#121212', // Dark gray
        },
      },
    ],
  },
}
