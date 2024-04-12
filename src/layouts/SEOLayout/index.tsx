import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";
import NoSSR from "@/components/NoSSR";

export type SEOLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
  image?: string;
  author?: string;
  keywords?: string;
  url?: string;
};

const SEOLayout: FC<SEOLayoutProps> = (props) => {
  const { children, title, description, image, author, keywords, url } = props;

  return (
    <Fragment>
      <Head>
        <meta name="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <title>{title}</title>

        {description && (
          <Fragment>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
          </Fragment>
        )}

        {image && (
          <Fragment>
            <meta name="image" content={image} />
            <meta property="og:image" content={image} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta property="og:image:alt" content={title} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:card" content="summary_large_image" />
          </Fragment>
        )}

        {author && (
          <Fragment>
            <meta name="author" content={author} />
            <meta name="copyright" content={author} />
          </Fragment>
        )}

        {keywords && <meta name="keywords" content={keywords} />}

        {url && (
          <Fragment>
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={url} />
            <meta property="twitter:url" content={url} />
            <link rel="canonical" href={url} />
          </Fragment>
        )}

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="audience" content="General" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="resource-type" content="Document" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <NoSSR>{children}</NoSSR>
    </Fragment>
  );
};

export default SEOLayout;
