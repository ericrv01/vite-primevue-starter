import userEvent from '@testing-library/user-event';
import { render, type RenderOptions, type RenderResult } from '@testing-library/vue';
import type { Component } from 'vue';

import PrimeVue from 'primevue/config';
import ToggleButton from 'primevue/togglebutton';
import InputSwitch from 'primevue/inputswitch';
import Card from 'primevue/card';
import Button from "primevue/button";

export { screen, fireEvent } from '@testing-library/vue';
export { expect, it, beforeEach, describe } from 'vitest';
export { mockServer } from './mock-server';

type SetupReturn = RenderResult & { user: ReturnType<typeof userEvent.setup> };

export const setup = (
    component: Component,
    { renderOptions }: { renderOptions?: RenderOptions<Component> } = {},
): SetupReturn => {
    return {
        user: userEvent.setup(),
        ...render(component, {
            global: {
                plugins: [PrimeVue],
                components: {
                    ToggleButton,
                    InputSwitch,
                    Card, Button

                },
            },
            ...renderOptions,
        }),
    };
};