/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const setupFile = fileURLToPath(new URL('./tests/setup.ts', import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: false,
    setupFiles: [setupFile],
    typecheck: {
      include: ['packages/react/src/__tests__/**/*.test-d.tsx'],
      tsconfig: './packages/react/tsconfig.test-types.json',
    },
  },
})
