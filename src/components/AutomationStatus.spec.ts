import { afterEach, beforeEach, describe, expect, it, screen, setup } from '@test/utils'
import MockAdapter from 'axios-mock-adapter'
import AutomationStatus from '@/components/AutomationStatus.vue'
import apiClient from '@/services/HTTPBaseService' // Importez apiClient

describe('automationStatus Component', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(apiClient)
    mock.onGet('/automationStatus').reply((config) => {
      console.log('Intercepted URL:', config.url)
      return [200, { isAllowed: true }]
    })
  })

  afterEach(() => {
    mock.reset()
  })

  it('should mount the component with a STOP button', async () => {
    // Mock the API response before mounting the component

    // Mount the component using the setup function
    const { user } = setup(AutomationStatus, {
      renderOptions: {
        props: {
          isAllowed: true,
        },
      },
    })

    // Wait for the component to finish rendering and API calls
    screen.debug()
    await screen.findByRole('button')

    // Test if the button is rendered with the correct text
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('STOP')
  })
})
