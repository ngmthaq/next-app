import { FC, ReactNode, useState } from "react";
import { SEOLayout } from "@/layouts";
import { ReverseInfiniteScroller } from "@/components";
import { StringUtils } from "@/utils";
import { PageProps } from "./props";

export const Page: FC<PageProps> = (props) => {
  const { repo } = props;

  const [data, setData] = useState(infiniteScrollerData);

  const handleLoadMore = () => {
    setData((state) => [...state, ...infiniteScrollerData.map((d) => ({ ...d, id: StringUtils.randomId() }))]);
  };

  return (
    <SEOLayout title="Next App">
      <ReverseInfiniteScroller
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
    </SEOLayout>
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
  id: StringUtils.randomId(),
  estimateSize: 20,
  props: { children: d },
}));

