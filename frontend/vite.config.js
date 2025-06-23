import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BookMedico/', // <-- set this to your repo name if using a subfolder
});
