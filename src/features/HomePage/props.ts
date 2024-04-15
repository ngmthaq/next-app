import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { HomePageProps, Repo } from "./types";

export const getServerSideProps = (async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo: Repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<HomePageProps>;

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
