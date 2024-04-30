"use server";

import { signIn } from "@/auth";

export async function Signin() {
  return signIn("square");
}
