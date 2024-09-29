import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import '@testing-library/jest-dom'
import { mockServer } from './ORIG_utils';

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

beforeAll(() => mockServer.listen({ onUnhandledRequest: `error` }));
afterAll(() => mockServer.close());

afterEach(() => {
  mockServer.resetHandlers();
  localStorage.clear()
  sessionStorage.clear()
})
