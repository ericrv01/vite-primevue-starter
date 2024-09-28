console.log('vitestSetup.ts has been executed');
import { consola } from "consola"

import { afterEach, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import '@testing-library/jest-dom'

console.log('vitestSetup.ts has been executed');
consola.info("VitestSetup.ts a démarré")
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

afterEach(() => {
  localStorage.clear()
  sessionStorage.clear()
})
