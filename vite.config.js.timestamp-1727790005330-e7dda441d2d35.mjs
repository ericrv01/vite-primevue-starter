// vite.config.js
import * as path from "node:path";
import { defineConfig } from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0__vue@3.5.10_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Markdown from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@2.79.2_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5_72a4esptahuiqoxkmihd35rv7m/node_modules/unplugin-vue-markdown/dist/vite.js";
import Pages from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.5.10_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_t_xkmtnh3klcdlgiupyygv3ucrym/node_modules/vite-plugin-pages/dist/index.js";
import Restart from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite-plugin-restart@0.4.1_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0_/node_modules/vite-plugin-restart/dist/index.js";
import VueDevTools from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.6_rollup@2.79.2_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser_zt2qvqhgc3xkj6ms3qlx3hbvwi/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_rollup@2.79.2_vue@3.5.10_typescript@5.6.2__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.js";
import Layouts from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0__vue-r_ugwhk6ixzss4frncirayyk7ryq/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import AutoImport from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.1_vue@3.5.10_typescript@5.6.2___rollup@2.79.2_webpack-sources@3.2.3/node_modules/unplugin-auto-import/dist/vite.js";
import Inspect from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/vite-plugin-inspect@0.8.7_rollup@2.79.2_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0_/node_modules/vite-plugin-inspect/dist/index.mjs";
import Unocss from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/unocss@0.58.9_postcss@8.4.47_rollup@2.79.2_vite@5.4.8_@types+node@22.7.4_sass@1.79.3_terser@5.34.0_/node_modules/unocss/dist/vite.mjs";
import Prism from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/markdown-it-prism@2.3.0/node_modules/markdown-it-prism/build/index.js";
import LinkAttributes from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import vueI18n from "file:///home/eric/projects/OAPS_Monitor/node_modules/.pnpm/@intlify+unplugin-vue-i18n@3.0.1_rollup@2.79.2_vue-i18n@9.14.1_vue@3.5.10_typescript@5.6.2___webpack-sources@3.2.3/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";

// package.json
var package_default = {
  name: "vite-primevue-starter",
  version: "1.7.5",
  license: "MIT",
  type: "module",
  scripts: {
    dev: "vite --port 3333 --open",
    build: "vite build",
    preview: "vite build && vite preview",
    "preview-https": "serve dist",
    start: "pnpm dev & wait-on tcp:3333 -v",
    lint: "eslint ./src",
    "test:e2e": "pnpm dev & wait-on tcp:3333 -v & cypress open",
    "test:ci": "pnpm dev & wait-on tcp:3333 -v & cypress run --headless",
    "test:unit": "vitest --run --reporter verbose",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui"
  },
  devDependencies: {
    "@antfu/eslint-config": "2.8.3",
    "@cypress/vite-dev-server": "^5.2.0",
    "@iconify/json": "^2.2.253",
    "@intlify/unplugin-vue-i18n": "^3.0.1",
    "@sfxcode/formkit-primevue": "^1.11.3",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/user-event": "^14.5.2",
    "@testing-library/vue": "^8.1.0",
    "@types/markdown-it-link-attributes": "^3.0.5",
    "@types/nprogress": "^0.2.3",
    "@unocss/eslint-config": "^0.58.9",
    "@unocss/preset-attributify": "^0.58.9",
    "@unocss/preset-icons": "^0.58.9",
    "@unocss/preset-typography": "^0.58.9",
    "@vitejs/plugin-vue": "^5.1.4",
    "@vitest/coverage-v8": "^2.1.1",
    "@vitest/ui": "^1.6.0",
    "@vue/server-renderer": "^3.5.10",
    "@vue/test-utils": "^2.4.6",
    "@vuedx/typecheck": "~0.7.6",
    "@vuedx/typescript-plugin-vue": "~0.7.6",
    "@vueuse/core": "^10.11.1",
    "@vueuse/head": "~2.0.0",
    add: "^2.0.6",
    autoprefixer: "^10.4.20",
    axios: "^1.7.7",
    c8: "^9.1.0",
    "chart.js": "^4.4.4",
    consola: "^3.2.3",
    critters: "^0.0.22",
    "cross-env": "^7.0.3",
    cypress: "^13.15.0",
    eslint: "^8.57.1",
    "eslint-plugin-cypress": "^2.15.2",
    "eslint-plugin-vitest-globals": "^1.5.0",
    "happy-dom": "^13.10.1",
    "https-localhost": "^4.7.1",
    jsdom: "^25.0.1",
    "markdown-it": "^14.1.0",
    "markdown-it-link-attributes": "^4.0.1",
    "markdown-it-prism": "^2.3.0",
    msw: "^2.4.9",
    nprogress: "^0.2.0",
    pinia: "~2.1.7",
    "pinia-cached-store": "^0.6.6",
    pnpm: "^8.15.9",
    primeicons: "^6.0.1",
    primevue: "^3.53.0",
    "prism-theme-vars": "^0.2.5",
    quill: "^1.3.7",
    rxjs: "^7.8.1",
    sass: "^1.79.3",
    tslib: "^2.7.0",
    typescript: "^5.6.2",
    unocss: "^0.58.9",
    "unplugin-auto-import": "^0.17.8",
    "unplugin-vue-components": "^0.26.0",
    "unplugin-vue-markdown": "^0.26.2",
    vite: "^5.4.8",
    "vite-plugin-inspect": "^0.8.7",
    "vite-plugin-pages": "^0.32.3",
    "vite-plugin-pwa": "^0.19.8",
    "vite-plugin-restart": "^0.4.1",
    "vite-plugin-vue-devtools": "^7.4.6",
    "vite-plugin-vue-layouts": "^0.11.0",
    "vite-ssg": "^0.23.8",
    vitest: "^1.6.0",
    vue: "^3.5.10",
    "vue-demi": "^0.14.10",
    "vue-i18n": "^9.14.1",
    "vue-router": "^4.4.5",
    "vue-tsc": "^2.1.6",
    "wait-on": "~7.2.0"
  },
  engines: {
    node: ">=18",
    pnpm: ">=7"
  },
  msw: {
    workerDirectory: [
      "public"
    ]
  }
};

// vite.config.js
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_dirname = "/home/eric/projects/OAPS_Monitor";
var __vite_injected_original_import_meta_url = "file:///home/eric/projects/OAPS_Monitor/vite.config.js";
var markdownWrapperClasses = "prose prose-sm m-auto text-left";
process.env.VITE_APP_BUILD_EPOCH = (/* @__PURE__ */ new Date()).getTime();
process.env.VITE_APP_VERSION = package_default.version;
var vite_config_default = defineConfig({
  server: {
    hmr: {
      port: false,
      path: "/ws"
    }
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify"
  },
  test: {
    globals: true,
    include: ["test/**/*.test.ts", "src/**/*.spec.ts"],
    environment: "happy-dom",
    setupFiles: ["./test/vitestSetup.ts"]
  },
  optimizeDeps: {
    include: [
      "vue-router",
      "@vueuse/core"
    ],
    exclude: [
      "vue",
      "vue-demi"
    ]
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
              needRuntime: true
            }),
            ripple: () => ({
              props: [],
              needRuntime: true
            })
          }
        }
      }
    }),
    vueI18n({
      include: path.resolve(__vite_injected_original_dirname, "./src/locales/**")
    }),
    Components({
      dts: "src/components.d.ts",
      resolvers: []
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head"
      ],
      exclude: [
        "**/dist/**"
      ],
      dts: "src/auto-import.d.ts"
    }),
    Pages({
      // pagesDir: ['src/pages', 'src/pages2'],
      pagesDir: [
        { dir: "src/pages", baseRoute: "" }
      ],
      extensions: ["vue", "md"],
      syncIndex: true,
      replaceSquareBrackets: true,
      extendRoute(route) {
        if (route.name === "about")
          route.props = (route2) => ({ query: route2.query.q });
        if (route.name === "components") {
          return {
            ...route,
            beforeEnter: (route2) => {
            }
          };
        }
      }
    }),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism);
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    Restart({
      restart: ["../../dist/*.js"]
    }),
    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "~": path.resolve(__vite_injected_original_dirname, "node_modules/"),
      "@test": fileURLToPath(new URL("./test", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZXJpYy9wcm9qZWN0cy9PQVBTX01vbml0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2VyaWMvcHJvamVjdHMvT0FQU19Nb25pdG9yL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2VyaWMvcHJvamVjdHMvT0FQU19Nb25pdG9yL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndW5wbHVnaW4tdnVlLW1hcmtkb3duL3ZpdGUnXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgUmVzdGFydCBmcm9tICd2aXRlLXBsdWdpbi1yZXN0YXJ0J1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBQcmlzbSBmcm9tICdtYXJrZG93bi1pdC1wcmlzbSdcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgdnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcbmltcG9ydCB7ZmlsZVVSTFRvUGF0aCwgVVJMfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuY29uc3QgbWFya2Rvd25XcmFwcGVyQ2xhc3NlcyA9ICdwcm9zZSBwcm9zZS1zbSBtLWF1dG8gdGV4dC1sZWZ0J1xuXG5wcm9jZXNzLmVudi5WSVRFX0FQUF9CVUlMRF9FUE9DSCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5wcm9jZXNzLmVudi5WSVRFX0FQUF9WRVJTSU9OID0gcGtnLnZlcnNpb25cblxuLyoqXG4gKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBwb3J0OiBmYWxzZSxcbiAgICAgIHBhdGg6ICcvd3MnLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnLCAnc3JjLyoqLyouc3BlYy50cyddLFxuICAgIGVudmlyb25tZW50OiAnaGFwcHktZG9tJyxcbiAgICBzZXR1cEZpbGVzOiBbJy4vdGVzdC92aXRlc3RTZXR1cC50cyddLFxuICB9LFxuXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgIF0sXG4gICAgZXhjbHVkZTogW1xuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLWRlbWknLFxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBVbm9jc3Moe30pLFxuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBkaXJlY3RpdmVUcmFuc2Zvcm1zOiB7XG4gICAgICAgICAgICBzdHlsZWNsYXNzOiAoKSA9PiAoe1xuICAgICAgICAgICAgICBwcm9wczogW10sXG4gICAgICAgICAgICAgIG5lZWRSdW50aW1lOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByaXBwbGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgICAgICAgbmVlZFJ1bnRpbWU6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB2dWVJMThuKHtcbiAgICAgIGluY2x1ZGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9sb2NhbGVzLyoqJyksXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgXSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2ViZmFuc3Bsei92aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcbiAgICBWdWVEZXZUb29scygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJyoqL2Rpc3QvKionLFxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydC5kLnRzJyxcbiAgICB9KSxcbiAgICBQYWdlcyh7XG4gICAgICAvLyBwYWdlc0RpcjogWydzcmMvcGFnZXMnLCAnc3JjL3BhZ2VzMiddLFxuICAgICAgcGFnZXNEaXI6IFtcbiAgICAgICAgeyBkaXI6ICdzcmMvcGFnZXMnLCBiYXNlUm91dGU6ICcnIH0sXG4gICAgICBdLFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIHN5bmNJbmRleDogdHJ1ZSxcbiAgICAgIHJlcGxhY2VTcXVhcmVCcmFja2V0czogdHJ1ZSxcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGlmIChyb3V0ZS5uYW1lID09PSAnYWJvdXQnKVxuICAgICAgICAgIHJvdXRlLnByb3BzID0gcm91dGUgPT4gKHsgcXVlcnk6IHJvdXRlLnF1ZXJ5LnEgfSlcblxuICAgICAgICBpZiAocm91dGUubmFtZSA9PT0gJ2NvbXBvbmVudHMnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgICAgYmVmb3JlRW50ZXI6IChyb3V0ZSkgPT4ge1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNsYXNzZXM6IG1hcmtkb3duV3JhcHBlckNsYXNzZXMsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3ByaXNtanMuY29tL1xuICAgICAgICBtZC51c2UoUHJpc20pXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IGxpbmsgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJlc3RhcnQoe1xuICAgICAgcmVzdGFydDogWycuLi8uLi9kaXN0LyouanMnXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XG4gICAgSW5zcGVjdCh7XG4gICAgICAvLyBjaGFuZ2UgdGhpcyB0byBlbmFibGUgaW5zcGVjdCBmb3IgZGVidWdnaW5nXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgJ34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzLycpLFxuICAgICAgJ0B0ZXN0JzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3Rlc3QnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gIH0sXG5cbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJ2aXRlLXByaW1ldnVlLXN0YXJ0ZXJcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS43LjVcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZSAtLXBvcnQgMzMzMyAtLW9wZW5cIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgYnVpbGQgJiYgdml0ZSBwcmV2aWV3XCIsXG4gICAgXCJwcmV2aWV3LWh0dHBzXCI6IFwic2VydmUgZGlzdFwiLFxuICAgIFwic3RhcnRcIjogXCJwbnBtIGRldiAmIHdhaXQtb24gdGNwOjMzMzMgLXZcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLi9zcmNcIixcbiAgICBcInRlc3Q6ZTJlXCI6IFwicG5wbSBkZXYgJiB3YWl0LW9uIHRjcDozMzMzIC12ICYgY3lwcmVzcyBvcGVuXCIsXG4gICAgXCJ0ZXN0OmNpXCI6IFwicG5wbSBkZXYgJiB3YWl0LW9uIHRjcDozMzMzIC12ICYgY3lwcmVzcyBydW4gLS1oZWFkbGVzc1wiLFxuICAgIFwidGVzdDp1bml0XCI6IFwidml0ZXN0IC0tcnVuIC0tcmVwb3J0ZXIgdmVyYm9zZVwiLFxuICAgIFwidGVzdDpjb3ZlcmFnZVwiOiBcInZpdGVzdCBydW4gLS1jb3ZlcmFnZVwiLFxuICAgIFwidGVzdDp1aVwiOiBcInZpdGVzdCAtLXVpXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudGZ1L2VzbGludC1jb25maWdcIjogXCIyLjguM1wiLFxuICAgIFwiQGN5cHJlc3Mvdml0ZS1kZXYtc2VydmVyXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJAaWNvbmlmeS9qc29uXCI6IFwiXjIuMi4yNTNcIixcbiAgICBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJAc2Z4Y29kZS9mb3Jta2l0LXByaW1ldnVlXCI6IFwiXjEuMTEuM1wiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9kb21cIjogXCJeMTAuNC4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuNS4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3VzZXItZXZlbnRcIjogXCJeMTQuNS4yXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3Z1ZVwiOiBcIl44LjEuMFwiLFxuICAgIFwiQHR5cGVzL21hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlc1wiOiBcIl4zLjAuNVwiLFxuICAgIFwiQHR5cGVzL25wcm9ncmVzc1wiOiBcIl4wLjIuM1wiLFxuICAgIFwiQHVub2Nzcy9lc2xpbnQtY29uZmlnXCI6IFwiXjAuNTguOVwiLFxuICAgIFwiQHVub2Nzcy9wcmVzZXQtYXR0cmlidXRpZnlcIjogXCJeMC41OC45XCIsXG4gICAgXCJAdW5vY3NzL3ByZXNldC1pY29uc1wiOiBcIl4wLjU4LjlcIixcbiAgICBcIkB1bm9jc3MvcHJlc2V0LXR5cG9ncmFwaHlcIjogXCJeMC41OC45XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4xLjRcIixcbiAgICBcIkB2aXRlc3QvY292ZXJhZ2UtdjhcIjogXCJeMi4xLjFcIixcbiAgICBcIkB2aXRlc3QvdWlcIjogXCJeMS42LjBcIixcbiAgICBcIkB2dWUvc2VydmVyLXJlbmRlcmVyXCI6IFwiXjMuNS4xMFwiLFxuICAgIFwiQHZ1ZS90ZXN0LXV0aWxzXCI6IFwiXjIuNC42XCIsXG4gICAgXCJAdnVlZHgvdHlwZWNoZWNrXCI6IFwifjAuNy42XCIsXG4gICAgXCJAdnVlZHgvdHlwZXNjcmlwdC1wbHVnaW4tdnVlXCI6IFwifjAuNy42XCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuMTEuMVwiLFxuICAgIFwiQHZ1ZXVzZS9oZWFkXCI6IFwifjIuMC4wXCIsXG4gICAgXCJhZGRcIjogXCJeMi4wLjZcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjIwXCIsXG4gICAgXCJheGlvc1wiOiBcIl4xLjcuN1wiLFxuICAgIFwiYzhcIjogXCJeOS4xLjBcIixcbiAgICBcImNoYXJ0LmpzXCI6IFwiXjQuNC40XCIsXG4gICAgXCJjb25zb2xhXCI6IFwiXjMuMi4zXCIsXG4gICAgXCJjcml0dGVyc1wiOiBcIl4wLjAuMjJcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxuICAgIFwiY3lwcmVzc1wiOiBcIl4xMy4xNS4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWN5cHJlc3NcIjogXCJeMi4xNS4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXZpdGVzdC1nbG9iYWxzXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJoYXBweS1kb21cIjogXCJeMTMuMTAuMVwiLFxuICAgIFwiaHR0cHMtbG9jYWxob3N0XCI6IFwiXjQuNy4xXCIsXG4gICAgXCJqc2RvbVwiOiBcIl4yNS4wLjFcIixcbiAgICBcIm1hcmtkb3duLWl0XCI6IFwiXjE0LjEuMFwiLFxuICAgIFwibWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJtYXJrZG93bi1pdC1wcmlzbVwiOiBcIl4yLjMuMFwiLFxuICAgIFwibXN3XCI6IFwiXjIuNC45XCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCJeMC4yLjBcIixcbiAgICBcInBpbmlhXCI6IFwifjIuMS43XCIsXG4gICAgXCJwaW5pYS1jYWNoZWQtc3RvcmVcIjogXCJeMC42LjZcIixcbiAgICBcInBucG1cIjogXCJeOC4xNS45XCIsXG4gICAgXCJwcmltZWljb25zXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJwcmltZXZ1ZVwiOiBcIl4zLjUzLjBcIixcbiAgICBcInByaXNtLXRoZW1lLXZhcnNcIjogXCJeMC4yLjVcIixcbiAgICBcInF1aWxsXCI6IFwiXjEuMy43XCIsXG4gICAgXCJyeGpzXCI6IFwiXjcuOC4xXCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNzkuM1wiLFxuICAgIFwidHNsaWJcIjogXCJeMi43LjBcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS42LjJcIixcbiAgICBcInVub2Nzc1wiOiBcIl4wLjU4LjlcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuOFwiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMC4yNi4wXCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtbWFya2Rvd25cIjogXCJeMC4yNi4yXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuNC44XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1pbnNwZWN0XCI6IFwiXjAuOC43XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1wYWdlc1wiOiBcIl4wLjMyLjNcIixcbiAgICBcInZpdGUtcGx1Z2luLXB3YVwiOiBcIl4wLjE5LjhcIixcbiAgICBcInZpdGUtcGx1Z2luLXJlc3RhcnRcIjogXCJeMC40LjFcIixcbiAgICBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiOiBcIl43LjQuNlwiLFxuICAgIFwidml0ZS1wbHVnaW4tdnVlLWxheW91dHNcIjogXCJeMC4xMS4wXCIsXG4gICAgXCJ2aXRlLXNzZ1wiOiBcIl4wLjIzLjhcIixcbiAgICBcInZpdGVzdFwiOiBcIl4xLjYuMFwiLFxuICAgIFwidnVlXCI6IFwiXjMuNS4xMFwiLFxuICAgIFwidnVlLWRlbWlcIjogXCJeMC4xNC4xMFwiLFxuICAgIFwidnVlLWkxOG5cIjogXCJeOS4xNC4xXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuNC41XCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiXjIuMS42XCIsXG4gICAgXCJ3YWl0LW9uXCI6IFwifjcuMi4wXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTE4XCIsXG4gICAgXCJwbnBtXCI6IFwiPj03XCJcbiAgfSxcbiAgXCJtc3dcIjoge1xuICAgIFwid29ya2VyRGlyZWN0b3J5XCI6IFtcbiAgICAgIFwicHVibGljXCJcbiAgICBdXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFlBQVksVUFBVTtBQUN4UyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sV0FB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
