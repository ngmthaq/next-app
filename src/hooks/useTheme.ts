import { useEffect, useState } from "react";
import CookieJs from "js-cookie";
import { STORAGE_KEYS } from "@/configs/constants";

export type Theme = "light" | "dark";

export function useTheme() {
  const localTheme: Theme = (CookieJs.get(STORAGE_KEYS.theme) as Theme) || "light";
  const [theme, setTheme] = useState<Theme>(localTheme);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    document.body.setAttribute("data-bs-theme", theme);
    CookieJs.set(STORAGE_KEYS.theme, theme);
  };

  const initTheme = () => {
    document.body.setAttribute("data-bs-theme", theme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    changeTheme(nextTheme);
  };

  return { theme, changeTheme, initTheme, toggleTheme };
}
