import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Pomodoro-online/',
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
})
