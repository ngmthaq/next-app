import { REGEX } from "@/configs/constants";

export function randomString(length: number = 16) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function randomId() {
  const str = randomString(16);
  return Date.now() + "_" + str;
}

export function validateEmail(email: string) {
  return String(email).toLowerCase().match(REGEX.email);
}
