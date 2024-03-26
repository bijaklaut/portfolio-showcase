"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftSvg, ArrowRightSvg } from "./SvgGroup";

interface ImageTypes {
  url: string;
  author: string;
  title: string;
}

export const Slider = ({ images }: { images: ImageTypes[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [parentWidth, setParentWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const parentRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const getParentWidth = useCallback(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current?.getBoundingClientRect().width);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        nextSlide();
      }, 3000),
    );

    return () => clearTimeout(timer);
  }, [nextSlide]);

  useEffect(() => {
    getParentWidth();
  }, []);

  return (
    <div
      ref={parentRef}
      className="flex aspect-video w-[700px] flex-col gap-5 rounded-md"
    >
      {!loading ? (
        <div className="relative w-full">
          {/* Previous */}
          <div
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
            onClick={previousSlide}
          >
            <ArrowLeftSvg className="h-10 w-10 stroke-current" />
          </div>

          {/* Next */}
          <div
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
            onClick={nextSlide}
          >
            <ArrowRightSvg className="h-10 w-10 stroke-current" />
          </div>

          {/* Background */}
          <div className="w-full overflow-hidden rounded-md">
            <div
              style={{
                width: `${parentWidth * images.length}px`,
                transform: `translateX(${-(currentIndex * parentWidth)}px)`,
              }}
              className={"flex h-auto w-full transition-all duration-300"}
            >
              {images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image.url}
                    width={500}
                    height={500}
                    alt={image.title}
                    className="aspect-video h-auto w-full"
                  />
                );
              })}
            </div>
          </div>
          {/* Dot Index */}
          <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 justify-center gap-5">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={
                    currentIndex === index
                      ? `h-2 w-8 rounded-full bg-primary fill-current transition-all duration-300 `
                      : `h-2 w-2 rounded-full bg-white fill-current transition-all duration-300 `
                  }
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="aspect-video h-[400px] animate-pulse rounded-md bg-primary/50 backdrop-blur-md"></div>
      )}
    </div>
  );
};
