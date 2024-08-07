import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev"

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") await setupDevPlatform()

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       // TODO: eslint-config-sc-js@0.0.7 をリリースしたら不要になるので消す
  //       // eslint-disable-next-line quote-props
  //       "react": "preact/compat",
  //       "react-dom": "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react/jsx-runtime.js": "preact/compat/jsx-runtime",
  //     })
  //   }
  //   return config
  // },
}

export default nextConfig
