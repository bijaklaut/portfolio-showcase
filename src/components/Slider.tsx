"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftSvg, ArrowRightSvg, CrossSvg, EyeSvg } from "./SvgGroup";
import cx from "classnames";

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const parentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const overlayClass = useCallback(() => {
    return cx({
      "fixed left-0 flex right-0 z-30 items-center justify-center overflow-hidden bg-white/10 backdrop-blur-md transition-all duration-200 ease-in-out":
        true,
      "top-0 bottom-0 opacity-100": showOverlay,
      "top-auto -bottom-full opacity-0": !showOverlay,
    });
  }, [showOverlay]);

  const thumbnailOverlayClass = useCallback(
    (imageUrl: string) => {
      return cx({
        "absolute left-0 top-0 h-full w-full transition-all duration-200 ":
          true,
        "bg-black/70": activeImage == imageUrl,
        "group-hover:bg-primary/30": activeImage != imageUrl,
      });
    },
    [activeImage],
  );

  const overlayHandler = useCallback(
    (image: string = "") => {
      if (showOverlay == false) {
        document.body.classList.add("overflow-hidden");
        clearTimeout(timer);
      } else {
        document.body.classList.remove("overflow-hidden");
        setTimer(
          setTimeout(() => {
            nextSlide();
          }, 3500),
        );
      }
      setShowOverlay((prev) => !prev);
      setActiveImage(image);
    },
    [showOverlay, timer],
  );

  const scrollThumbnail = useCallback((direction: string) => {
    const container = document.getElementById("thumbnail");
    if (container && direction == "right") {
      let scroll = container.scrollLeft + 400;
      container.scrollTo({ left: scroll, behavior: "smooth" });
    }

    if (container && direction == "left") {
      let scroll = container.scrollLeft - 400;
      container.scrollTo({ left: scroll, behavior: "smooth" });
    }
  }, []);

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

      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }, [loading]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        nextSlide();
      }, 3500),
    );

    return () => clearTimeout(timer);
  }, [nextSlide]);

  useEffect(() => {
    getParentWidth();
  });

  return (
    <>
      <div
        ref={parentRef}
        className="flex aspect-video w-[600px] flex-col gap-5 rounded-md"
      >
        {!loading ? (
          <div className="relative w-full">
            {/* Previous */}
            <div
              className="group absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-r-full py-6 pe-2 transition-colors duration-300 hover:bg-primary/30"
              onClick={previousSlide}
            >
              <ArrowLeftSvg className="h-9 w-9 stroke-current" />
            </div>

            {/* Next */}
            <div
              className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-l-full py-6 ps-2 transition-colors duration-300 hover:bg-primary/30"
              onClick={nextSlide}
            >
              <ArrowRightSvg className="h-9 w-9 stroke-current" />
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
                      width={1000}
                      height={1000}
                      alt={image.title}
                      className="aspect-video h-auto w-full"
                      onClick={() => overlayHandler(image.url)}
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
      <div ref={overlayRef} className={overlayClass()}>
        <div className="relative flex max-w-[900px] flex-col items-center gap-5">
          {activeImage && (
            <Image
              src={activeImage}
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video w-[900px] rounded-md"
            />
          )}

          <div className="relative max-w-[900px]">
            <button
              className="absolute -left-7 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary/50 p-2 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80"
              onClick={() => scrollThumbnail("left")}
            >
              <ArrowLeftSvg className="h-8 w-8 stroke-current" />
            </button>
            <div
              id="thumbnail"
              className="grid w-full grid-flow-col gap-3 overflow-x-hidden rounded-xl"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative w-max cursor-pointer overflow-hidden rounded-md"
                  onClick={() => setActiveImage(image.url)}
                >
                  <Image
                    key={index}
                    src={image.url}
                    width={500}
                    height={500}
                    alt="test"
                    className="aspect-video h-auto w-[200px]"
                  />
                  <div className={thumbnailOverlayClass(image.url)}></div>
                  {activeImage == image.url && (
                    <EyeSvg className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 stroke-primary/80" />
                  )}
                </div>
              ))}
            </div>
            <button
              className="absolute -right-7 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80"
              onClick={() => scrollThumbnail("right")}
            >
              <ArrowRightSvg className="h-8 w-8 stroke-current" />
            </button>
          </div>
          <button
            className="absolute -right-20 rounded-full bg-primary/20 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80"
            onClick={() => overlayHandler("")}
          >
            <CrossSvg className="h-10 w-10 fill-current" />
          </button>
        </div>
      </div>
    </>
  );
};
