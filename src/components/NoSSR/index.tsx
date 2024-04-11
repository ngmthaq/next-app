import dynamic from "next/dynamic";
import { FC, Fragment, ReactNode } from "react";

export type NoSSRProps = {
  children: ReactNode;
};

const NoSSR: FC<NoSSRProps> = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
