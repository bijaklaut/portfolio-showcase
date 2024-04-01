"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftSvg, ArrowRightSvg, CrossSvg, EyeSvg } from "./SvgGroup";
import cx from "classnames";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variantsMotion";

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
  const [activeImage, setActiveImage] = useState("/img/slide_1.jpg");
  const parentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const overlayClass = useCallback(() => {
    return cx({
      "fixed flex z-30 top-0 left-0 right-0 w-full h-screen items-center justify-center bg-white/10 backdrop-blur-md transition-all duration-200 ease-in-out":
        true,
      // "top-0 bottom-0 opacity-100": showOverlay,
      // "top-auto -bottom-full opacity-0": !showOverlay,
    });
  }, []);

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

  const indicatorClass = useCallback(
    (imageUrl: string) => {
      return cx({
        "indicator absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 stroke-primary/80 sm:h-12 sm:w-12 md:h-16 md:w-16":
          true,
        hidden: activeImage != imageUrl,
      });
    },
    [activeImage],
  );

  const pseudoIndicatorClass = useCallback(
    (imageUrl: string) => {
      return cx({
        "pseudo-indicator absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 stroke-primary/80":
          true,
        hidden: activeImage != imageUrl,
      });
    },
    [activeImage],
  );

  const overlayHandler = useCallback(
    (image: string = "") => {
      if (showOverlay == false) {
        document.body.classList.add("overflow-hidden");
        clearTimeout(timer);
        landscapeMobileAdjustment();
        thumbnailOverflow();
      } else {
        document.body.classList.remove("overflow-hidden");
        setTimer(
          setTimeout(() => {
            nextSlide();
          }, 3500),
        );
      }
      setShowOverlay((prev) => !prev);
      setTimeout(() => {
        setActiveImage(image);
      }, 300);
    },
    [showOverlay, timer],
  );

  const landscapeMobileAdjustment = useCallback(() => {
    const image = document.querySelector("#overlay-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const arrows = document.querySelectorAll(".thumbnail-arrow");
    const exitButton = document.querySelector("#exit-button");
    const pseudos = document.querySelectorAll(".pseudo-indicator");
    const indicators = document.querySelectorAll(".indicator");

    if (screen.height < screen.width / 2) {
      // Image
      image?.classList.add("w-[400px]");
      image?.classList.remove(
        "sm:max-w-[450px]",
        "lg:max-w-[700px]",
        "xl:max-w-[800px]",
      );

      // Thumbnails
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.add("w-[100px]");
      });

      // Arrows
      arrows.forEach((arrow) => {
        arrow.classList.remove("sm:p-2");
        arrow.children[0].classList.remove("md:h-8", "md:w-8");
      });

      // Exit Button
      exitButton?.classList.remove(
        "sm:-right-10",
        "sm:-top-8",
        "md:-right-12",
        "md:-top-10",
      );
      exitButton?.classList.add("-right-12", "-top-4");
      exitButton?.firstElementChild?.classList.remove("md:h-10", "md:w-10");

      // Indicator
      indicators.forEach((indicator) => {
        indicator.parentElement?.classList.add("opacity-0");
      });
      pseudos.forEach((pseudo) => {
        pseudo.parentElement?.classList.remove("opacity-0");
      });
    } else {
      // Image
      image?.classList.remove("w-[400px]");
      image?.classList.add(
        "sm:max-w-[450px]",
        "lg:max-w-[700px]",
        "xl:max-w-[800px]",
      );

      // Thumbnails
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("w-[100px]");
      });

      // Arrows
      arrows.forEach((arrow) => {
        arrow.classList.add("sm:p-2");
        arrow.children[0].classList.add("md:h-8", "md:w-8");
      });

      // Exit Button
      exitButton?.classList.add(
        "sm:-right-10",
        "sm:-top-8",
        "md:-right-12",
        "md:-top-10",
      );
      exitButton?.classList.remove("-right-12", "-top-4");
      exitButton?.firstElementChild?.classList.add("md:h-10", "md:w-10");

      // Indicator
      indicators.forEach((indicator) => {
        indicator.parentElement?.classList.remove("opacity-0");
      });
      pseudos.forEach((pseudo) => {
        pseudo.parentElement?.classList.add("opacity-0");
      });
    }
  }, []);

  const thumbnailOverflow = useCallback(() => {
    const thumbnail = document.getElementById("thumbnail");
    const arrows = document.querySelectorAll(".thumbnail-arrow");

    if (thumbnail?.scrollWidth! - thumbnail?.offsetWidth! > 50) {
      arrows.forEach((arrow) => {
        arrow.classList.remove("hidden");
      });
    } else {
      arrows.forEach((arrow) => {
        arrow.classList.add("hidden");
      });
    }
  }, []);

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

  const previousSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  }, []);

  const goToIndex = useCallback((index: number) => setCurrentIndex(index), []);

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
      {/* Main Slider */}
      <div
        ref={parentRef}
        className="flex aspect-video w-full max-w-[600px] flex-col gap-5 rounded-md"
      >
        {!loading ? (
          <div className="relative w-full">
            {/* Previous */}
            <div
              className="group absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-r-full py-6 pe-2 transition-colors duration-300 hover:bg-primary/30"
              onClick={previousSlide}
            >
              <ArrowLeftSvg className="h-6 w-6 stroke-current sm:h-9 sm:w-9" />
            </div>

            {/* Next */}
            <div
              className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-l-full py-6 ps-2 transition-colors duration-300 hover:bg-primary/30"
              onClick={nextSlide}
            >
              <ArrowRightSvg className="h-6 w-6 stroke-current sm:h-9 sm:w-9" />
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

      {/* Overlay */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={
          showOverlay
            ? { y: 0, transition: { duration: 0.3, ease: "easeInOut" } }
            : {
                y: "-100%",
                transition: {
                  when: "afterChildren",
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }
        }
        ref={overlayRef}
        className={overlayClass()}
      >
        <motion.div
          id="overlayContent"
          variants={fadeIn}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex w-full flex-col items-center gap-5 px-3 py-10"
        >
          <div className="relative">
            <Image
              id="overlay-image"
              src={activeImage || "/dummy.png"}
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video w-full max-w-[400px] rounded-md sm:max-w-[450px] lg:max-w-[700px] xl:max-w-[800px]"
            />
            <button
              id="exit-button"
              className="absolute rounded-full bg-primary/20 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80 max-sm:-top-12 max-sm:right-1/2 max-sm:translate-x-1/2 sm:-right-10 sm:-top-8 md:-right-12 md:-top-10"
              onClick={() => overlayHandler("")}
            >
              <CrossSvg className="h-8 w-8 fill-current md:h-10 md:w-10" />
            </button>
          </div>
          {/* Thumbnail */}
          <div
            id="thumbnail-container"
            className="relative max-w-[90%] sm:max-w-[450px] lg:max-w-[700px] xl:max-w-[800px]"
          >
            <button
              className="thumbnail-arrow absolute -bottom-10 left-[45%] z-10 -translate-x-1/2 rounded-full bg-primary/50 p-1 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80 sm:-left-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:p-2"
              onClick={() => scrollThumbnail("left")}
            >
              <ArrowLeftSvg className="h-5 w-5 stroke-current md:h-8 md:w-8" />
            </button>
            <div
              id="thumbnail"
              className="grid w-full grid-flow-col gap-1 overflow-x-hidden rounded-xl sm:gap-3"
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
                    className="thumbnail aspect-video h-auto max-w-[100px] sm:max-w-[150px] md:max-w-[200px]"
                  />
                  <div className={thumbnailOverlayClass(image.url)} />
                  <div>
                    <EyeSvg className={indicatorClass(image.url)} />
                  </div>
                  <div className="opacity-0">
                    <EyeSvg className={pseudoIndicatorClass(image.url)} />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="thumbnail-arrow absolute -bottom-10 right-[45%] translate-x-1/2 rounded-full bg-primary/50 p-1 transition-colors duration-200 hover:bg-primary/80 active:bg-primary/80 sm:-right-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:p-2"
              onClick={() => scrollThumbnail("right")}
            >
              <ArrowRightSvg className="h-5 w-5 stroke-current md:h-8 md:w-8" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
