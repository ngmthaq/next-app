import Image from "next/image";
import { FC, Fragment } from "react";
import { Paths } from "@/configs";
import { useTheme } from "@/hooks";

const Message: FC = () => {
  const { getTextClassName } = useTheme();

  return (
    <Fragment>
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages" style={{ minWidth: "400px" }}>
        <li className="message-item">
          <a href="#" className={getTextClassName()}>
            <Image src={Paths.STATICS.favicon} alt="avatar" width={30} height={30} className="rounded-circle" />
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
          <a href="#" className={getTextClassName()}>
            <Image src={Paths.STATICS.favicon} alt="avatar" width={30} height={30} className="rounded-circle" />
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
          <a href="#" className={getTextClassName()}>
            <Image src={Paths.STATICS.favicon} alt="avatar" width={30} height={30} className="rounded-circle" />
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
          <a href="#" className={getTextClassName()}>
            Show all messages
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Message;

