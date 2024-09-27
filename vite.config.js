import * as path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import Restart from 'vite-plugin-restart'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import pkg from './package.json'
import {fileURLToPath, URL} from "node:url";

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

process.env.VITE_APP_BUILD_EPOCH = new Date().getTime()
process.env.VITE_APP_VERSION = pkg.version

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  server: {
    hmr: {
      port: false,
      path: '/ws',
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts', 'src/**/*.spec.ts'],
    environment: 'happy-dom',
    setupFiles: ['test/vitestSetup.ts'],
  },

  optimizeDeps: {
    include: [
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue',
      'vue-demi',
    ],
  },
  plugins: [
    Unocss({}),
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          directiveTransforms: {
            styleclass: () => ({
              props: [],
              needRuntime: true,
            }),
            ripple: () => ({
              props: [],
              needRuntime: true,
            }),
          },
        },
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
      ],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
      ],
      exclude: [
        '**/dist/**',
      ],
      dts: 'src/auto-import.d.ts',
    }),
    Pages({
      // pagesDir: ['src/pages', 'src/pages2'],
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
      syncIndex: true,
      replaceSquareBrackets: true,
      extendRoute(route) {
        if (route.name === 'about')
          route.props = route => ({ query: route.query.q })

        if (route.name === 'components') {
          return {
            ...route,
            beforeEnter: (route) => {

              // console.log(route)
            },
          }
        }
      },
    }),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: link => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    Restart({
      restart: ['../../dist/*.js'],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, 'node_modules/'),
      '@test': fileURLToPath(new URL('./test', import.meta.url))
    },
  },

})
