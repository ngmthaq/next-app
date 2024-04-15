import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import { DEFAULT_LOCALE } from "next.config";
import { FC } from "react";

export const getServerSideProps = (async ({ req, locale }) => {
  return {
    props: {
      locale: locale || DEFAULT_LOCALE,
    },
  };
}) satisfies GetServerSideProps<{ locale: string }>;

type DocumentProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Document: FC<DocumentProps> = ({ locale }) => {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
