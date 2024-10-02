import AutomationStatus from './AutomationStatus.vue'

describe('<AutomationStatus />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AutomationStatus)
  })
})