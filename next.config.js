/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
