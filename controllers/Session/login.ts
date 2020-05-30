import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.1/mod.ts";
import Users from "../../model/users.ts";

import connectionDatabase from "../../database/connection.ts";
import { ErrorHandler } from "../../utils/handleError.ts";
import token from "../../utils/token.ts";
// import { AuthController } from '../Auth/authController.ts'

const database = connectionDatabase.findDatabase;
const user = database.collection("users");

export const loginUser: HandlerFunc = async (data: Context) => {
  try {
    if (data.request.headers.get("content-type") !== "application/json") {
      throw new ErrorHandler("Body invalido", 422);
    }
    const body = await data.body();

    console.log("body :>> ");
    if (!Object.keys(body).length) {
      throw new ErrorHandler("O body não pode estar vazio!!", 400);
    }
    let { email, password } = body;

    const existUser: Users[] = await user.find();
    const userData: any = existUser.find((item: any) => {
      if (email === item.email) {
        return item.password;
      }
    });
    // console.log(userPassword.password)
    //   password = await bcrypt.hash(password as string)
    // console.log(password)

    const isValid = await bcrypt.compareSync(
      password as any,
      userData.password
    );
    if (isValid) {
      return data.json(token.generate(userData.user_id), 200);
    }
    if (!isValid) {
      return data.json("Token inválido, tente novamente.", 400);
    }
  } catch (error) {
    throw new ErrorHandler(error.message, error.status || 500);
  }
};
