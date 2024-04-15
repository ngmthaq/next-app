import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";
import { Paths } from "@/configs";
import { NoSSR } from "@/components";

export type CSRLayoutProps = {
  children: ReactNode;
  title: string;
};

const CSRLayout: FC<CSRLayoutProps> = (props) => {
  const { children, title } = props;

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
        <link rel="icon" href={Paths.STATICS.favicon} />
        <link rel="apple-touch-icon" href={Paths.STATICS.favicon} />
      </Head>
      <NoSSR>{children}</NoSSR>
    </Fragment>
  );
};

export default CSRLayout;
