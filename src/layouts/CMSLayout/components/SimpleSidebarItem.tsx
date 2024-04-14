import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { FC } from "react";

export type SimpleSidebarItemProps = {
  path: string;
  bsIcon: string;
  title: string;
};

const SimpleSidebarItem: FC<SimpleSidebarItemProps> = ({ path, bsIcon, title }) => {
  const { theme } = useTheme();

  return (
    <Link className={`nav-link collapsed text-${theme === "dark" ? "light" : "dark"}`} href={path}>
      <i className={bsIcon}></i>
      <span>{title}</span>
    </Link>
  );
};

export default SimpleSidebarItem;
