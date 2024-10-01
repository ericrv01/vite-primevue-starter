// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'uno.css'
import '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
import type { UserModule } from '@/types'
import '@/assets/css/primevue-custom.css' // CSS personnalisé, pour les Toasts illisibles dans certains thèmes.

async function prepareApp() {
  const { worker } = await import('@/mocks/common/browser')
  return worker.start()
}

const routes = setupLayouts(generatedRoutes)

prepareApp().then(() => {
  ViteSSG(
    App,
    { routes },
    (ctx) => {
      // install all modules under `modules/`
      Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
        .forEach(i => i.install?.(ctx))
    },
  )
})
/* export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/!*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
) */
