import Image from "next/image";
import { FC, Fragment } from "react";
import { useTheme } from "@/hooks/useTheme";

const Message: FC = () => {
  const { theme } = useTheme();

  return (
    <Fragment>
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages" style={{ minWidth: "400px" }}>
        <li className="message-item">
          <a href="#" className={`text-${theme === "dark" ? "light" : "dark"}`}>
            <Image src="/favicon.ico" alt="avatar" width={30} height={30} className="rounded-circle" />
            <div>
              <h4>Maria Hudson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#" className={`text-${theme === "dark" ? "light" : "dark"}`}>
            <Image src="/favicon.ico" alt="avatar" width={30} height={30} className="rounded-circle" />
            <div>
              <h4>Anna Nelson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#" className={`text-${theme === "dark" ? "light" : "dark"}`}>
            <Image src="/favicon.ico" alt="avatar" width={30} height={30} className="rounded-circle" />
            <div>
              <h4>David Muldon</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#" className={`text-${theme === "dark" ? "light" : "dark"}`}>
            Show all messages
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Message;
