import { useEffect, useState } from "react";
import CookieJs from "js-cookie";
import { Constants, EventBus } from "@/configs";

export type Theme = "light" | "dark";

export function useTheme() {
  const localTheme: Theme = (CookieJs.get(Constants.STORAGE_KEYS.theme) as Theme) || "light";
  const [theme, setTheme] = useState<Theme>(localTheme);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    document.body.setAttribute("data-bs-theme", theme);
    CookieJs.set(Constants.STORAGE_KEYS.theme, theme);
    EventBus.emit<Theme>("NEXT_CHANGE_THEME", theme);
  };

  const initTheme = () => {
    document.body.setAttribute("data-bs-theme", theme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    changeTheme(nextTheme);
  };

  const getTextClassName = () => {
    return theme === "dark" ? "text-light" : "text-dark";
  };

  const handleEventBus = (theme: Theme) => {
    setTheme(theme);
    document.body.setAttribute("data-bs-theme", theme);
    CookieJs.set(Constants.STORAGE_KEYS.theme, theme);
  };

  useEffect(() => {
    EventBus.on<Theme>("NEXT_CHANGE_THEME", handleEventBus);
    return () => EventBus.off<Theme>("NEXT_CHANGE_THEME", handleEventBus);
  });

  return { theme, changeTheme, initTheme, toggleTheme, getTextClassName };
}
