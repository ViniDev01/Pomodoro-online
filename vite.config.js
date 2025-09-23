import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Pomodoro-online/',
  server: {
    open: true,
    port: 3000,
  },
})
