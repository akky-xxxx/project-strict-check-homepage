/** @type {import('next').NextConfig} */
const nextConfig = {
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
