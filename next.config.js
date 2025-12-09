/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow accessing dev server from other devices on the LAN
  // Remove or tighten before production. "*" means any origin.
  allowedDevOrigins: ["*"],
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/features/authentication/login_screen",
        permanent: false,
      },
      {
        source: "/login",
        destination: "/features/authentication/login_screen",
        permanent: false,
      },

      {
        source: "/signup",
        destination: "/features/authentication/signup_screen",
        permanent: false,
      },
    ];
  },
  webpack(config) {
    // Configure webpack to handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
