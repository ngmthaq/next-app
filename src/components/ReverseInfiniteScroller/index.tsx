import { useFirstRender } from "@/hooks/useFirstRender";
import { FC, Fragment, ReactNode, useEffect, useId, useRef } from "react";

export type ReverseInfiniteScrollerItem = {
  id: string;
  estimateSize: number;
  props: any;
};

export type ReverseInfiniteScrollerProps = {
  items: ReverseInfiniteScrollerItem[];
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

const ITEM_CLASSNAME = "ReverseInfiniteScrollerItem";
const WRAPPER_CLASSNAME = "ReverseInfiniteScrollerWrapper";

const ReverseInfiniteScroller: FC<ReverseInfiniteScrollerProps> = (props) => {
  const { items, width, height, isHasMore, isLoading, className } = props;
  const { onLoadMore, loadingComponent, endComponent } = props;
  const { ItemComponent } = props;

  const id = useId();
  const isFirstRender = useFirstRender();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevScrollHeight = useRef<number>(0);

  const wrapperHeight = items.reduce((height, item) => {
    return height + item.estimateSize;
  }, 0);

  const handleScroll = (_: Event) => {
    prevScrollHeight.current = containerRef.current?.scrollHeight || 0;
    const scrollTop = containerRef.current?.scrollTop || 0;
    if (isHasMore && !isLoading && scrollTop <= 0) {
      onLoadMore();
    }
  };

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (containerRef.current && isFirstRender) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    } else if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight - prevScrollHeight.current;
    }
  }, [items, isFirstRender]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={className || ""}
      style={{ width: width, height: height, overflowY: "scroll" }}
    >
      {isLoading ? loadingComponent || <Fragment /> : <Fragment />}
      {isHasMore ? <Fragment /> : endComponent || <Fragment />}
      <div
        className={WRAPPER_CLASSNAME}
        style={{
          width: "100%",
          minHeight: wrapperHeight + "px",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            id={index + "_" + id + "_" + item.id}
            className={ITEM_CLASSNAME}
            style={{ minHeight: item.estimateSize + "px" }}
          >
            <ItemComponent {...item.props} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReverseInfiniteScroller;
