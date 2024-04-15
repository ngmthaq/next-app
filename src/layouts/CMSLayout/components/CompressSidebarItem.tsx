import { FC, Fragment } from "react";
import SimpleSidebarItem, { SimpleSidebarItemProps } from "./SimpleSidebarItem";

export type CompressSidebarItemProps = {
  id: string;
  bsIcon: string;
  title: string;
  items: Omit<SimpleSidebarItemProps, "bsIcon">[];
};

const CompressSidebarItem: FC<CompressSidebarItemProps> = ({ id, bsIcon, title, items }) => {
  return (
    <Fragment>
      <a
        className="nav-link collapsed user-select-none cursor-pointer"
        data-bs-target={`#CompressSidebarItem_${id}`}
        data-bs-toggle="collapse"
      >
        <i className={bsIcon}></i>
        <span>{title}</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id={`CompressSidebarItem_${id}`} className="nav-content collapse" data-bs-parent="#sidebar-nav">
        {items.map((item, index) => (
          <li key={index}>
            <SimpleSidebarItem {...item} bsIcon="bi bi-circle" />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CompressSidebarItem;
