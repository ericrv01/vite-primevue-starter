import userEvent from '@testing-library/user-event';
import { render, type RenderOptions, type RenderResult  } from '@testing-library/vue';
import type { Component } from 'vue';
export { screen, fireEvent } from '@testing-library/vue';
export { expect, it, beforeEach, describe } from 'vitest';
export { mockServer } from './mock-server';

import PrimeVue from 'primevue/config';
import ToggleButton from 'primevue/togglebutton';

type SetupReturn = RenderResult & { user: ReturnType<typeof userEvent.setup> };

/*
export const setup = (
    component: Component,
    { renderOptions }: { renderOptions?: RenderOptions<Component> } = {},
): SetupReturn => {
    return {
        user: userEvent.setup(),
        ...render(component, renderOptions),
    };
};*/

export const setup = (
    component: Component,
    { renderOptions }: { renderOptions?: RenderOptions<Component> } = {},
): SetupReturn => {
    const GlobalComponents = defineComponent({
        components: {ToggleButton},
        template: '<component :is="component" />',
        setup() {
            return {component};
        },
    });

    return {
        user: userEvent.setup(),
        ...render(GlobalComponents, {
            global: {
                plugins: [PrimeVue],
            },
            ...renderOptions,
        }),
    };
}


