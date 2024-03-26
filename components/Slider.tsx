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
      setParentWidth(parentRef.current.getBoundingClientRect().width);
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
    <div>
      <div ref={parentRef} className="flex w-[700px] flex-col gap-5 rounded-md">
        <div className="relative w-full">
          {/* Previous */}
          <div
            className="absolute top-1/2 z-10 -translate-y-1/2 translate-x-10 cursor-pointer"
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
                  <div key={index} className="relative w-full">
                    <Image
                      src={image.url}
                      width={500}
                      height={500}
                      alt={image.title}
                      className="aspect-video h-auto w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Dot Index */}
        <div className="flex justify-center">
          {images.map((_, index) => {
            return (
              <div key={index} onClick={() => goToIndex(index)}>
                <svg
                  className={
                    currentIndex === index
                      ? `w-5 fill-current text-red-500 transition-all duration-300 `
                      : `w-5 fill-current text-white transition-all duration-300 `
                  }
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.875 7.5C9.875 8.12989 9.62478 8.73398 9.17938 9.17938C8.73398 9.62478 8.12989 9.875 7.5 9.875C6.87011 9.875 6.26602 9.62478 5.82062 9.17938C5.37522 8.73398 5.125 8.12989 5.125 7.5C5.125 6.87011 5.37522 6.26602 5.82062 5.82062C6.26602 5.37522 6.87011 5.125 7.5 5.125C8.12989 5.125 8.73398 5.37522 9.17938 5.82062C9.62478 6.26602 9.875 6.87011 9.875 7.5Z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
