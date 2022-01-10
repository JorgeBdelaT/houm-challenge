import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";

interface InfiniteScrollerProps {
  children: JSX.Element[];
  disabled: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  loading: boolean;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  children,
  disabled,
  hasNextPage,
  loadMore,
  loading,
}) => {
  const [prevY, setPrevY] = useState(0);
  const loadingRef = useRef<Element>();

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const y = entities[0].boundingClientRect.y;
      if (prevY > y && !disabled && hasNextPage && !loading) {
        loadMore();
      }
      setPrevY(y);
    },
    [loadMore, prevY, disabled, hasNextPage, loading]
  );

  useEffect(() => {
    const currentRef = loadingRef.current;
    if (currentRef) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
      const intersectionObserver = new IntersectionObserver(
        handleObserver,
        options
      );
      intersectionObserver.observe(currentRef);
      return () => intersectionObserver.disconnect();
    }
  }, [handleObserver]);

  return (
    <>
      {children}
      <Box ref={loadingRef} sx={styles.loadingBox}>
        <CircularProgress sx={styles.loadingIcon(loading)} />
      </Box>
    </>
  );
};

export default InfiniteScroller;
