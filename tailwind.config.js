/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			padding: {
				2.25: '0.5625rem',
				4.25: '1.0625rem',
			},
			colors: {
				transparent: 'rgba(107, 114, 128, 0.75)',
			},
			maxWidth: {
				170: '10.625rem',
				355: '22.1875rem',
				669: '41.8125rem',
				793: '49.5625rem',
			},
			boxShadow: {
				default: '0px 1px 2px rgba(0, 0, 0, 0.05)',
				modal:
					'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},
		},
	},
	plugins: [],
};
