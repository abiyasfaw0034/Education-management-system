import { createAuthClient } from "better-auth/react";
import { Addfield } from "./plugin";
// import { adminClient } from "better-auth/client/plugins";
// import { ac, admin, user } from "./permissions";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
  plugins: [Addfield()],
});
