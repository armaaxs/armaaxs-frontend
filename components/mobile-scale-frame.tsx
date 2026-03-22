"use client";

import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type MobileScaleFrameProps = {
  children: ReactNode;
  topInset?: number;
  sideInset?: number;
  bottomInset?: number;
  fitHeight?: boolean;
};

export function MobileScaleFrame({
  children,
  topInset = 88,
  sideInset = 20,
  bottomInset = 20,
  fitHeight = false,
}: MobileScaleFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useLayoutEffect(() => {
    const element = frameRef.current;

    if (!element) {
      return;
    }

    const updateHeight = () => {
      setContentWidth(element.scrollWidth);
      setContentHeight(element.scrollHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [children]);

  const isMobile = viewport.width > 0 && viewport.width < 640;

  const scale = useMemo(() => {
    if (!isMobile) {
      return 1;
    }

    if (!contentWidth) {
      return 1;
    }

    const availableWidth = Math.max(viewport.width - sideInset * 2, 1);
    const widthScale = availableWidth / contentWidth;

    if (!fitHeight || !contentHeight) {
      return Math.min(widthScale, 1);
    }

    const availableHeight = Math.max(viewport.height - topInset - bottomInset, 1);
    const heightScale = availableHeight / contentHeight;

    return Math.min(widthScale, heightScale, 1);
  }, [
    bottomInset,
    contentHeight,
    contentWidth,
    fitHeight,
    isMobile,
    sideInset,
    topInset,
    viewport.height,
    viewport.width,
  ]);

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        minHeight: `calc(100dvh - ${topInset + bottomInset}px)`,
        paddingTop: topInset,
        paddingBottom: bottomInset,
      }}
    >
      <div
        ref={frameRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
