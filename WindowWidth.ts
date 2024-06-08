import { useState, useEffect } from "react";

const mobileBreakpoint = 768;

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export const useScreenType = () => {
  const { width } = useWindowSize();

  const isMobile = width && width < mobileBreakpoint; // Check if width is not undefined before comparison

  return { isMobile };
};
