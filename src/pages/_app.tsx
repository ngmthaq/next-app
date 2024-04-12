import { FC } from "react";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/assets/scss/index.scss";

const openSansFont = Open_Sans({ subsets: ["latin"] });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main id="app" className={openSansFont.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
