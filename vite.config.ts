import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if the environment is for deployment (GitHub Actions)
const isDeploy = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: isDeploy ? '/web-app/' : '/',
	resolve: {
		alias: {
		  // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created. Temporary workaround.
		  '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
		},
	  },
})
