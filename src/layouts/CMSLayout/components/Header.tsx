import Image from "next/image";
import { FC } from "react";
import { useTheme } from "@/hooks";
import Notification from "./Notification";
import Message from "./Message";
import Profile from "./Profile";

const Header: FC = () => {
  const { theme, toggleTheme, getTextClassName } = useTheme();

  const handleToggleSidebar = () => {
    document.querySelector("body")?.classList.toggle("toggle-sidebar");
  };

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between gap-3">
        <button className="btn btn-sm toggle-sidebar-btn" onClick={handleToggleSidebar}>
          <i className="bi bi-list "></i>
        </button>
        <a href="/" target="_blank" className="logo d-flex align-items-center gap-1">
          <Image src="/favicon.ico" width={28} height={30} alt="logo" />
          <span className={getTextClassName()}>AdminCMS</span>
        </a>
      </div>
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link nav-icon search-bar-toggle cursor-pointer" onClick={toggleTheme}>
              {theme === "light" ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-fill"></i>}
            </a>
          </li>
          <li className="nav-item dropdown">
            <Notification />
          </li>
          <li className="nav-item dropdown">
            <Message />
          </li>
          <li className="nav-item dropdown pe-3">
            <Profile />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
