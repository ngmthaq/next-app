import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/client";

export const login = async (loginForm: FormData) => {
  const email = loginForm.get("email") as string;
  const password = loginForm.get("password") as string;
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials.user;
};
