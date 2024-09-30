import { setupServer } from 'msw/node'
import { handlers } from '@/mocks/common/handlers'

export const mockServer = setupServer(...handlers)
