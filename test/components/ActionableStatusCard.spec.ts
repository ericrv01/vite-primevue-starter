import {beforeEach, describe, expect, it, screen, setup} from '../utils'
import ActionableStatus from '../../src/components/ActionableStatusCard.vue'

describe('ActionableStatus', () => {
  beforeEach(() => {
    setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: false,
          isActivable: false,
          title: 'Automation Status Title',
        },
      },
    })
  })

  it('should mount the component', () => {
    const card = screen.getByTestId('actionable-status')
    expect(card).toBeInTheDocument()
  })

  it('renders a switch button', () => {
    const switchButton = screen.getByRole('switch')
    expect(switchButton).toBeInTheDocument()
  })

  it('renders a title', () => {
    const titleElement = screen.getByText('Automation Status Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('disables the switch button when isActivable is false', () => {
    const switchButton = screen.getByRole('switch')
    expect(switchButton).toBeDisabled()
  })
})

describe('Etat du switch selon la propriété', () => {
  it('initializes the switch button based on status TRUE in props', () => {
    setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: true,
          isActivable: false,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    expect(switchButton).toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-on')
  })

  it('initializes the switch button based on status FALSE in props', () => {
    setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: false,
          isActivable: false,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    expect(switchButton).not.toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-off')
  })

  it('change status to ON on click if activable', async () => {
    const {user} = setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: false,
          isActivable: true,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    await user.click(switchButton)
    expect(switchButton).toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-on')
  })

  it('change status to OFF on click if activable', async () => {
    const {user} = setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: true,
          isActivable: true,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    await user.click(switchButton)
    expect(switchButton).not.toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-off')
  })

  it('dont change status to ON on click if not activable', async () => {
    const {user} = setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: false,
          isActivable: false,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    await user.click(switchButton)
    expect(switchButton).not.toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-off')
  })

  it('dont change status to OFF on click if not activable', async () => {
    const {user} = setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: true,
          isActivable: false,
          title: 'Automation Status',
        },
      },
    })
    const switchButton = screen.getByRole('switch')
    await user.click(switchButton)
    expect(switchButton).toBeChecked()
    const card = screen.getByTestId('actionable-status')
    expect(card).toHaveClass('bg-on')
  })
})

describe('Emitter', () => {
  let emitted: any
  let result: any

  beforeEach(() => {
    result = setup(ActionableStatus, {
      renderOptions: {
        props: {
          status: false,
          isActivable: true,
          title: 'Automatisation',
        },
      },
    })

    emitted = result.emitted // Récupère les événements émis pour vérification
  })

  it('should emit status-changed when switch is toggled', async () => {
    // Trouver le switch dans le composant
    const switchButton = screen.getByRole('switch') // Utiliser "checkbox" pour `InputSwitch` dans PrimeVue

    // Simuler un clic pour changer l'état (avec userEvent)
    const user = result.user
    await user.click(switchButton)

    // Vérifier que l'événement "status-changed" a été émis
    expect(emitted()['status-changed']).toBeTruthy()
    // Vérifier que l'événement contient la nouvelle valeur de "checked" (true)
    expect(emitted()['status-changed'][0]).toEqual([true])

    // Re-cliquer pour revenir à l'état "false"
    await user.click(switchButton)

    // Vérifier que l'événement "status-changed" a été émis avec la nouvelle valeur (false)
    expect(emitted()['status-changed'][1]).toEqual([false])
  })
})
