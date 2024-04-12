import { InferGetServerSidePropsType } from "next";
import { FC, ReactNode, useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import InfiniteScroller from "@/components/InfiniteScroller";
import { randomId } from "@/utils/str";
import { getServerSideProps } from "./props";

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const Page: FC<PageProps> = (props) => {
  const { repo } = props;

  const [data, setData] = useState(infiniteScrollerData);

  const handleLoadMore = () => {
    setData((state) => [...state, ...infiniteScrollerData]);
  };

  return (
    <BaseLayout title="Next App">
      <InfiniteScroller
        items={data}
        width="200px"
        height="200px"
        isHasMore={true}
        isLoading={false}
        ItemComponent={InfiniteItem}
        onLoadMore={handleLoadMore}
        loadingComponent={<p>Loading...</p>}
        endComponent={<p>END</p>}
      />
    </BaseLayout>
  );
};

export const InfiniteItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <p>{children}</p>;
};

const infiniteScrollerData = [
  "honda",
  "vw",
  "opel",
  "saab",
  "toyota",
  "honda",
  "vw",
  "opel",
  "saab",
  "toyota",
  "honda",
  "vw",
  "opel",
  "saab",
  "toyota",
  "honda",
  "vw",
  "opel",
  "saab",
  "toyota",
].map((d) => ({
  id: randomId(),
  estimateSize: 20,
  props: { children: d },
}));
