import Hello from '@/components/basic/Hello.vue'
import {expect, it, screen, setup, fireEvent} from '@test/utils'

describe('Hello.vue', () => {
    beforeEach( () => {
        setup(Hello, {
                renderOptions: {
                    props: {
                        count: 3
                    }
                }
            }
        )
    })

    it('renders correctly with initial props', () => {
        const element = screen.getByText('3 x 2 = 6')
        expect(element).toBeInTheDocument()
    })

    it('increments times when button is clicked', async () => {
        const button = screen.getByText('x1')
        await fireEvent.click(button)
        await expect(screen.getByText('3 x 3 = 9')).toBeTruthy()

    })
})