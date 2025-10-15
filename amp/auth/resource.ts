import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: { username: true },
  signUpAttributes: ["email"],
});
