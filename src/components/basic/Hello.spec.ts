import { beforeEach, describe, expect, fireEvent, it, screen, setup } from '@test/utils'
// import '@testing-library/jest-dom'
import Hello from '@/components/basic/Hello.vue'

describe('Hello.vue', () => {
  beforeEach(() => {
    setup(Hello, {
      renderOptions: {
        props: {
          count: 3,
        },
      },
    })
  })

  it('renders correctly with initial props', () => {
    const element = screen.getByText('3 x 2 = 6')
    expect(element).toBeInTheDocument()
  })

  it('increments times when button is clicked', async () => {
    const button = screen.getByText('x1')
    await fireEvent.click(button)
    expect(screen.getByText('3 x 3 = 9')).toBeTruthy()
  })
})
