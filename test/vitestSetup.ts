import { afterAll, afterEach, beforeAll, beforeEach, expect, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import '@testing-library/jest-dom'
import * as matchers from '@testing-library/jest-dom/matchers'

// Import PrimeVue, ToastService, and other necessary components
import { mockServer } from '../src/mocks/common/node'

expect.extend(matchers)

// Global `toastAddSpy` to track calls to `toast.add`
export const toastAddSpy = vi.fn() // Export `toastAddSpy` to be used in tests

beforeAll(() => mockServer.listen({ onUnhandledRequest: `error` }))
afterAll(() => mockServer.close())

afterEach(() => {
  mockServer.resetHandlers()
  localStorage.clear()
  sessionStorage.clear()
  toastAddSpy.mockClear() // Clear `toastAddSpy` after each test
})

// Add a global configuration for Vue context
// This will be executed before each test to ensure PrimeVue and ToastService are available
beforeEach(() => {
  vi.mock('primevue/usetoast', () => ({
    useToast: vi.fn(() => ({
      add: toastAddSpy,
    })),
  }))
})
