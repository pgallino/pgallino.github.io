import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
console.log('Created dist/404.html for GitHub Pages route fallback.')
