import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import viteCNAMEPlugin from './viteCNAMEPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rkvaishnavp.github.io/",
  plugins: [react(), viteCNAMEPlugin({ domain: 'rkvp.in' })]
})
