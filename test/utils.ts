import userEvent from '@testing-library/user-event'
import {type RenderOptions, type RenderResult, render} from '@testing-library/vue'
import type {Component} from 'vue'

import PrimeVue from 'primevue/config'
import ToggleButton from 'primevue/togglebutton'
import InputSwitch from 'primevue/inputswitch'
import Card from 'primevue/card'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'
import StartStopButton from '@/components/StartStopButton.vue'

export {mockServer} from '@/mocks/common/node'
// import { mockServer } from '@/mocks/common/node'

export {screen, fireEvent} from '@testing-library/vue'
export {expect, it, beforeEach, describe, afterEach} from 'vitest'
// export mockServer

type SetupReturn = RenderResult & { user: ReturnType<typeof userEvent.setup> }

export function setup(component: Component, {renderOptions}: {
  renderOptions?: RenderOptions<Component>
} = {}): SetupReturn {
  return {
    user: userEvent.setup(),
    ...render(component, {
      global: {
        plugins: [PrimeVue, ToastService],
        components: {
          ToggleButton,
          InputSwitch,
          Card,
          Button,
          StartStopButton,
        },
      },
      ...renderOptions,
    }),
  }
}
