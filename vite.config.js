import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: '/danielbui12',
  plugins: [
    react(),
    htmlPlugin(loadEnv(mode, '.')),
  ]
}))

function htmlPlugin(env) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html) =>
        html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    }
  }
}