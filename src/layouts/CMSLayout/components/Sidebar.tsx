import { FC } from "react";
import SimpleSidebarItem, { SimpleSidebarItemProps } from "./SimpleSidebarItem";
import CompressSidebarItem, { CompressSidebarItemProps } from "./CompressSidebarItem";

const Sidebar: FC = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {simpleNavItems.map((nav, index) => (
          <li className="nav-item" key={index}>
            <SimpleSidebarItem {...nav} />
          </li>
        ))}
        {compressNavItems.map((nav, index) => (
          <li className="nav-item" key={index}>
            <CompressSidebarItem {...nav} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

const simpleNavItems: SimpleSidebarItemProps[] = [
  { title: "Dashboard", path: "/admin/dashboard", bsIcon: "bi bi-grid" },
];

const compressNavItems: CompressSidebarItemProps[] = [
  {
    id: "components",
    title: "Component",
    bsIcon: "bi bi-menu-button-wide",
    items: [{ title: "Alert", path: "/admin/dashboard" }],
  },
];
