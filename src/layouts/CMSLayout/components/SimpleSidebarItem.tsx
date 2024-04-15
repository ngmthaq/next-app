import Link from "next/link";
import { FC } from "react";
import { useTheme } from "@/hooks";

export type SimpleSidebarItemProps = {
  path: string;
  bsIcon: string;
  title: string;
};

const SimpleSidebarItem: FC<SimpleSidebarItemProps> = ({ path, bsIcon, title }) => {
  const { getTextClassName } = useTheme();

  return (
    <Link className={`nav-link collapsed ${getTextClassName()}`} href={path}>
      <i className={bsIcon}></i>
      <span>{title}</span>
    </Link>
  );
};

export default SimpleSidebarItem;

