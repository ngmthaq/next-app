import Head from "next/head";
import { FC, Fragment } from "react";
import { Paths } from "@/configs";
import { NoSSR } from "@/components";
import { CSRLayoutProps } from "../CSRLayout";

export type SEOLayoutProps = CSRLayoutProps & {
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
        <title>{title}</title>
        <link rel="icon" href={Paths.STATICS.favicon} />
        <link rel="apple-touch-icon" href={Paths.STATICS.favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {process.env.NODE_ENV === "production" && (
          <Fragment>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
            <meta httpEquiv="audience" content="General" />
            <meta httpEquiv="content-language" content="en" />
            <meta name="resource-type" content="Document" />
            <meta name="distribution" content="Global" />
            <meta name="revisit-after" content="1 days" />

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
          </Fragment>
        )}
      </Head>
      <NoSSR>{children}</NoSSR>
    </Fragment>
  );
};

export default SEOLayout;
