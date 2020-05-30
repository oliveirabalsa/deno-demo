import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import { ErrorMiddleware } from "./utils/handleError.ts";
import { AuthController } from "./controllers/Auth/authController.ts";
import { loginUser } from "./controllers/Session/login.ts";

import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "./controllers/Users/index.ts";

import {
  getOrders,
  createOrders,
  deleteOrders,
  updateOrders,
  getOrder,
} from "./controllers/Orders/index.ts";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "./controllers/stores/storeController.ts";

const app = new Application();
app.post("/login", loginUser);

app.use(ErrorMiddleware);
app.use(AuthController);

app
  .get("/users", getAllUsers)
  .post("/newUser", createUser)
  .get("/user/:id", getUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser)
  .get("/orders", getOrders)
  .post("/newOrder", createOrders)
  .delete("/order/:id", deleteOrders)
  .put("/order/:id", updateOrders)
  .get("/order", getOrder)
  .post("stores", create)
  .get("/stores", getAll)
  .get("/stores/:id", getById)
  .put("stores/:id", update)
  .delete("stores/:id", remove)
  .start({ port: 4000 });

console.log(`server listening on http://localhost:4000`);
