// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts()],
	build: {
		target: 'esnext',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es']
		},
		outDir: 'lib',
		minify: false,
		rollupOptions: {
			external: [
				'perf_hooks',
				'url',
				'path',
				'buffer',
				'css.escape',
				'he',
				'iconv-lite',
				'node-fetch',
				'webidl-conversions',
				'whatwg-encoding',
				'whatwg-mimetype'
			]
		}
	}
});
