import { beforeEach, describe, expect, it, screen, setup } from '@test/utils'
import Hello from '@/components/basic/Hello.vue'

describe('Hello.vue', () => {
  let user: ReturnType<typeof setup>['user'];

  beforeEach(() => {
    const setupResult = setup(Hello, {
      renderOptions: {
        props: {
          count: 3,
        },
      },
    })
    user = setupResult.user;
  })

  it('renders correctly with initial props', () => {
    const element = screen.getByText('3 x 2 = 6')
    expect(element).toBeInTheDocument()
  })

  it('increments times when button is clicked', async () => {
    const button = screen.getByText('x1')
    await user.click(button);
    // await fireEvent.click(button)

    expect(screen.getByText('3 x 3 = 9')).toBeTruthy()
  })
})
