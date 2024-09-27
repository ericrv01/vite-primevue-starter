import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
});