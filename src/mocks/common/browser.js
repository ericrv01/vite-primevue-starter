import { setupWorker } from "msw/browser";
import { handlers } from "@/mocks/common/handlers.js";

export const worker = setupWorker(...handlers);


/*/!* AutomationStatus *!/
export const setupAllowedAutomation = () => {
  worker.use(...createAutomationHandler(true));
};
export const setupNotAllowedAutomation = () => {
  worker.use(...createAutomationHandler(false));
};

/!* Login *!/
export const setupLoginNetworkError = () => {
  worker.use(...createLoginNetworkErrorHandler());
};*/
