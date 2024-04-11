import { InferGetServerSidePropsType } from "next";
import { FC } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { getServerSideProps } from "./props";

export const Page: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ repo }) => {
  return (
    <BaseLayout title="Thang">
      <p>Hello</p>
      <p>{repo.message}</p>
      <p>{repo.documentation_url}</p>
    </BaseLayout>
  );
};
