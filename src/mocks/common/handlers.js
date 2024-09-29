import { http, HttpResponse } from "msw";

async function isAuthenticated(request) {
  console.log("Test authorization");
  console.log(request.headers);
  if (!request.headers.has("Authorization")) {
    throw new HttpResponse(null, { status: 401 });
  }
}

export const handlers = [

  http.post("/api/v1/client/login", async ({ request }) => {

    // No header for login
    const authHeader = request.headers.get('Authorization')
    if (authHeader != null ) {
      return new HttpResponse(null, {
        status: 500,
        statusText: "An authorization header is present in the request, it should not.",
      });
    }

    const { username, password } = await request.json();

    // User OK
    if (username === "test" && password === "test") {
      return HttpResponse.json({
        accessToken: "test",
        username: "eric",
        isAdmin: true,
        isWriter: true,
        isReader: false,
      });
    }
    return new HttpResponse(null, {
      status: 401,
      statusText: "Not authorized",
    });
  }),

  http.post("/api/v1/client/test", async ({ request }) => {

    // Check authorization header
    const authHeader = request.headers.get('Authorization')
    console.log('Auth header')
    console.log(authHeader)
    if (authHeader == null) {
      return new HttpResponse(null, {
        status: 500,
        statusText: "An authorization header is present in the request, it should not.",
      });
    }
    return new HttpResponse(null, {
      status: 200,
      statusText: "OK, authorization header is present",
    })
  })
];



