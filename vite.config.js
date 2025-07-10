import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // allowedHosts: [
    //   'frontend-service.reactjstemp.svc.cluster.local',
    //   '194.238.16.49'
    // ]
  },
  // preview: {
  //   https: false,
  //   strictPort: true,
  //   port: 3000,
  //   open: true
  // }
})
