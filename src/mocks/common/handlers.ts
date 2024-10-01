import {HttpResponse, http} from 'msw'

export const handlers = [

  // Mocks HTTP Base Services
  http.get('/test-success', () => {
    return HttpResponse.json({
      message: 'Hello World',
    })
  }),
  http.get('/test-error-401', () => {
    return new HttpResponse(null, {
      status: 401,
      statusText: 'Not authorized',
    })
  }),
  http.get('/test-error-403', () => {
    return new HttpResponse(null, {
      status: 403,
      statusText: 'Forbidden',
    })
  }),
  http.get('/test-error-404', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Not Found',
    })
  }),
  http.get('/test-error-500', () => {
    return new HttpResponse(null, {
      status: 500,
      statusText: 'Server Error',
    })
  }),
  http.get('/test-error-301', () => {
    return new HttpResponse(null, {
      status: 301,
      statusText: 'Network Error',
    })
  }),
  /*  http.get('/automationStatus', async () => {
      return HttpResponse.json({
        isAllowed: false,
      })
    }),*/
  http.post('/test-error-422', () => {
    return HttpResponse.json({
      errors: [
        {
          msg: 'jobTemplateName must be provided',
          param: 'jobTemplateName',
          location: 'body',
        },
        {
          value: 'Test_Automation',
          msg: 'Automation Test_Automation already exists',
          param: 'automaton',
          location: 'body',
        },
      ],
    }, {
      status: 422,
    })
  }),
]
