import { FC, Fragment, ReactNode, useEffect, useId, useRef } from "react";

export type InfiniteScrollerItem = {
  id: string;
  estimateSize: number;
  props: any;
};

export type InfiniteScrollerProps = {
  items: InfiniteScrollerItem[];
  width: string;
  height: string;
  isHasMore: boolean;
  isLoading: boolean;
  className?: string;
  loadingComponent?: ReactNode;
  endComponent?: ReactNode;
  onLoadMore: () => void;
  ItemComponent: FC<any>;
};

const ITEM_CLASSNAME = "InfiniteScrollerItem";
const WRAPPER_CLASSNAME = "InfiniteScrollerWrapper";

const InfiniteScroller: FC<InfiniteScrollerProps> = (props) => {
  const { items, width, height, isHasMore, isLoading, className } = props;
  const { onLoadMore, loadingComponent, endComponent } = props;
  const { ItemComponent } = props;

  const id = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const wrapperHeight = items.reduce((height, item) => {
    return height + item.estimateSize;
  }, 0);

  const handleScroll = (_: Event) => {
    const offsetHeight = containerRef.current?.offsetHeight || 0;
    const scrollTop = containerRef.current?.scrollTop || 0;
    const scrollHeight = containerRef.current?.scrollHeight || 0;

    if (isHasMore && !isLoading && offsetHeight + scrollTop >= scrollHeight) {
      onLoadMore();
    }
  };

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      id={id}
      ref={containerRef}
      className={className || ""}
      style={{ width: width, height: height, overflowY: "scroll" }}
    >
      <div
        className={WRAPPER_CLASSNAME}
        style={{ width: "100%", minHeight: wrapperHeight + "px" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            id={id + "_" + item.id}
            className={ITEM_CLASSNAME}
            style={{ minHeight: item.estimateSize + "px" }}
          >
            <ItemComponent {...item.props} />
          </div>
        ))}
      </div>
      {isHasMore ? <Fragment /> : endComponent || <Fragment />}
      {isLoading ? loadingComponent || <Fragment /> : <Fragment />}
    </div>
  );
};

export default InfiniteScroller;
