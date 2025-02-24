import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@components": path.resolve(__dirname, "src/components"),
    "@apis": path.resolve(__dirname, "src/common/apis"),
  },
});
