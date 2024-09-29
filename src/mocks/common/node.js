import { setupServer } from "msw/node";
import { handlers } from "@/mocks/common/handlers.js";

export const server = setupServer(...handlers);

