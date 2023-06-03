/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	primary: '#FF9902',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697'
}

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {
			keyframes: {
				animationOpacit: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scalenIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 0,
						transform: 'scale(1)'
					}
				},
				animation: {
					animationOpacit: 'animationOpacit 1s ease-in-out',
					scalenIn: 'scalenIn .35s ease-in-out'
				}
			}
		}
	},
	plugins: []
}
