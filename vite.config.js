import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Для GitHub Pages (project site): оставьте './' — пути к ассетам будут относительными.
// Если нужен абсолютный префикс вида /имя-репозитория/, задайте переменную окружения при сборке:
// VITE_BASE=/my-repo/ npm run build
const rawBase = process.env.VITE_BASE ?? './';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export default defineConfig({
  plugins: [react()],
  base,
});
