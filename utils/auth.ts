import { serve } from "https://deno.land/std/http/server.ts"
import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"

const key = "your-secret"
const payload: Payload = {
  iss: "joe",
  exp: setExpiration(new Date().getTime() + 60000),
}
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
}

console.log("server is listening at 0.0.0.0:8000")
for await (const req of serve("0.0.0.0:8000")) {
  if (req.method === "GET") {
    req.respond({ body: makeJwt({ header, payload, key }) + "\n" })
  } else {
    const jwt = new TextDecoder().decode(await Deno.readAll(req.body))
    await validateJwt(jwt, key, { isThrowing: false })
      ? req.respond({ body: "Valid JWT\n" })
      : req.respond({ body: "Invalid JWT\n", status: 401 })
  }
}