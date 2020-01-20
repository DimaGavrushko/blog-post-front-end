// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

export function useScrollToTop(pathname) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
