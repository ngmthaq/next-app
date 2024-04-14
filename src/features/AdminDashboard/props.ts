import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps<any>;

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
