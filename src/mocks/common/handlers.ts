import { HttpResponse, http } from 'msw'

/* async function isAuthenticated(request) {
  console.log('Test authorization')
  console.log(request.headers)
  if (!request.headers.has('Authorization'))
    throw new HttpResponse(null, { status: 401 })
} */

export const handlers = [

  /*  http.post('/api/v1/client/login', async ({ request }) => {
    // No header for login
    const authHeader = request.headers.get('Authorization')
    if (authHeader != null) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'An authorization header is present in the request, it should not.',
      })
    }

    const { username, password } = await request.json()

    // User OK
    if (username === 'test' && password === 'test') {
      return HttpResponse.json({
        accessToken: 'test',
        username: 'eric',
        isAdmin: true,
        isWriter: true,
        isReader: false,
      })
    }
    return new HttpResponse(null, {
      status: 401,
      statusText: 'Not authorized',
    })
  }), */

  /*  http.post('/api/v1/client/test', async ({ request }) => {
    // Check authorization header
    const authHeader = request.headers.get('Authorization')
    consola.info('Auth header')
    consola.info(authHeader)
    if (authHeader == null) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'An authorization header is present in the request, it should not.',
      })
    }
    return new HttpResponse(null, {
      status: 200,
      statusText: 'OK, authorization header is present',
    })
  }), */

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
