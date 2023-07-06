/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: 'public',
				},
			},
		],
		// 추가 플러그인 작성
	],
	nextConfig,
	{
		webpack: (config) => {
			config.module.rules.push({
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			});
			return config;
		},
	},
);
