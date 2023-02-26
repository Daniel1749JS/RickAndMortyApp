import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://daniel1749js.github.io/rickandmortyapp/",
  plugins: [react()],
})
