interface ImportMetaEnv {
  VITE_APP_VERSION: string
  VITE_APP_BUILD_EPOCH: number
}

declare module 'primevue/toasteventbus' {
  import type { EventBus } from 'primevue/utils'

  export default {} as ReturnType<typeof EventBus>
}
