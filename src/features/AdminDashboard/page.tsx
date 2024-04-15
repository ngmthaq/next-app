import { FC } from "react";
import { CMSLayout } from "@/layouts";
import { PageProps } from "./props";

export const Page: FC<PageProps> = () => {
  return (
    <CMSLayout title="Dashboard">
      <div className="p-3">
        <p>Hello</p>
      </div>
    </CMSLayout>
  );
};
