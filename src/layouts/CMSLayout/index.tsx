import { FC } from "react";
import CSRLayout, { CSRLayoutProps } from "../CSRLayout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export type CMSLayoutProps = CSRLayoutProps & {};

const CMSLayout: FC<CMSLayoutProps> = (props) => {
  const { children, title } = props;

  return (
    <CSRLayout title={title}>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <section id="main">{children}</section>
      </div>
    </CSRLayout>
  );
};

export default CMSLayout;
