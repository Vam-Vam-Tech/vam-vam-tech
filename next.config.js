/** @type {import('next').NextConfig} */
const nextConfig = {
	unstable_runtimeJS: false,
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/sitemap-generator.js");
		}
		return config;
	},
};

module.exports = nextConfig;
