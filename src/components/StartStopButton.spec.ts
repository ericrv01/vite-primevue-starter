import { beforeEach, describe, expect, it, screen, setup } from '@test/utils'
import StartStopButton from '@/components/StartStopButton.vue'

describe('StartStopButton', () => {
    beforeEach(() => {
        setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: false,
                    isAllowed: false,
                },
            },
        })
    })

    it('should mount the component', () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('renders a button with label START', () => {
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('START')
    })

    it('disables the button when isAllowed is false', () => {
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('Button behavior', () => {
    it('initializes the button based on isRunning TRUE in props', () => {
        setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: true,
                    isAllowed: true,
                },
            },
        })
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('STOP')
    })

    it('initializes the button based on isRunning FALSE in props', () => {
        setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: false,
                    isAllowed: true,
                },
            },
        })
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('START')
    })

    it('toggles status to STOP on click if allowed', async () => {
        const { user } = setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: false,
                    isAllowed: true,
                },
            },
        })
        const button = screen.getByRole('button')
        await user.click(button)
        expect(button).toHaveTextContent('STOP')
    })

    it('toggles status to START on click if allowed', async () => {
        const { user } = setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: true,
                    isAllowed: true,
                },
            },
        })
        const button = screen.getByRole('button')
        await user.click(button)
        expect(button).toHaveTextContent('START')
    })

    it('does not toggle status on click if not allowed', async () => {
        const { user } = setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: false,
                    isAllowed: false,
                },
            },
        })
        const button = screen.getByRole('button')
        await user.click(button)
        expect(button).toHaveTextContent('START')
    })
})

describe('Emitter', () => {
    let emitted: any
    let result: any

    beforeEach(() => {
        result = setup(StartStopButton, {
            renderOptions: {
                props: {
                    isRunning: false,
                    isAllowed: true,
                },
            },
        })

        emitted = result.emitted // Récupère les événements émis pour vérification
    })

    it('should emit status-changed when button is toggled', async () => {
        const button = screen.getByRole('button')
        const user = result.user
        await user.click(button)
        expect(emitted()['status-changed']).toBeTruthy()
        expect(emitted()['status-changed'][0]).toEqual([true])
        await user.click(button)
        expect(emitted()['status-changed'][1]).toEqual([false])
    })
})