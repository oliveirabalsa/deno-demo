import { MiddlewareFunc } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import { ErrorHandler } from "../../utils/handleError.ts";
import token from "../../utils/token.ts";

export const AuthController: MiddlewareFunc = (next) => async (data) => {
  const url: any = data.url.pathname;

  if (url !== "/login") {
    const authorization: any = data.request.headers.get("authorization");

    if (!authorization) {
      throw new ErrorHandler("Necessitamos do campo de Authorization", 400);
    }

    const headerToken = authorization?.replace("Bearer ", "");

    if (!token) {
      throw new ErrorHandler("Não autorizado", 401);
    }
    const isTokenValid = await token.validate(headerToken);

    if (!isTokenValid) {
      throw new ErrorHandler("Token inválido", 401);
    }
  }
  await next(data);
};
