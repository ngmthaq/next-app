import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { TODO } from "@/configs";

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps<TODO>;

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
