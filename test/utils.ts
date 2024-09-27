import userEvent from '@testing-library/user-event';
import { render, type RenderOptions, type RenderResult  } from '@testing-library/vue';
import type { Component } from 'vue';
export { screen, fireEvent } from '@testing-library/vue';
export { expect, it } from 'vitest';

type SetupReturn = RenderResult & { user: ReturnType<typeof userEvent.setup> };

export const setup = (
    component: Component,
    { renderOptions }: { renderOptions?: RenderOptions<Component> } = {},
): SetupReturn => {
    return {
        user: userEvent.setup(),
        ...render(component, renderOptions),
    };
};