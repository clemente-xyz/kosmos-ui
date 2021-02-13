import React, { useRef, useState, useEffect } from "react";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import CarouselArrow from "./components/Arrow";
import CarouselBullet from "./components/Bullet";
import CarouselSlide from "./components/Slide";
import CarouselCaption from "./components/Caption";

import { TCarousel, TCarouselProps } from "./types";
import {
  MainContainer,
  Container,
  ArrowsContainer,
  BulletsContainer,
  BulletList,
} from "./styles";

function Carousel({
  activeIndex = 0,
  arrow,
  autoplay = 0,
  bullet,
  children,
  withArrows = false,
  withBullets = false,
  onSlideChange = () => undefined,
  setSlideCustom = undefined,
  slidesAtOnce = 1,
  style,
}: TCarouselProps): TCarousel {
  const slides = React.Children.map(children, (child) => {
    if (child.type !== CarouselSlide) return;

    return child;
  });

  const sliderRef = useRef<HTMLDivElement>(null);

  const [slide, setSlideOriginal] = useState(0);

  const [isDragging, setDragging] = useState(false);

  const setSlide = setSlideCustom
    ? (index: number) => setSlideOriginal(setSlideCustom(index))
    : setSlideOriginal;

  const [springProps, setSpringProps] = useSprings(slides.length, (index) => ({
    offset: index,
  }));

  const gesture = useGesture(
    {
      onDrag: ({
        down,
        movement: [xDelta],
        direction: [xDir],
        distance,
        cancel,
        first,
        active,
      }) => {
        if (first) setDragging(true);

        if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
          const {
            width,
          } = sliderRef.current.parentElement.getBoundingClientRect();

          if (down && distance > width / 2) {
            cancel && cancel();

            if (active)
              setSlide(
                Math.min(
                  Math.max(slide + (xDir > 0 ? -1 : 1), 0),
                  slides.length - slidesAtOnce
                )
              );
          }

          // see:  https://github.com/react-spring/react-spring/issues/861
          // @ts-ignore
          setSpringProps((index) => ({
            offset: (active && down ? xDelta : 0) / width + (index - slide),
          }));
        }
      },
      onClick: () => {
        if (isDragging) return setDragging(false);

        handleSlideClick(slide);
      },
    },
    {
      drag: {
        delay: 200,
      },
    }
  );

  useEffect(() => {
    // see:  https://github.com/react-spring/react-spring/issues/861
    // @ts-ignore
    setSpringProps((index) => ({ offset: index - slide }));

    onSlideChange(slide);
  }, [slide, setSpringProps, onSlideChange]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay > 0) {
      interval = global.setInterval(() => {
        const targetIndex = (slide + 1) % slides.length;

        setSlide(targetIndex);
      }, autoplay);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, slides.length, slide]);

  useEffect(() => {
    setSlide(activeIndex % slides.length);
  }, [activeIndex, slides.length]);

  function handleSlideClick(slideIndex: number) {
    slides[slideIndex].props.onClick && slides[slideIndex].props.onClick();
  }

  function goToNextSlide() {
    if (slide === slides.length - slidesAtOnce) return setSlide(0);

    setSlide(slide + 1);
  }

  function goToPrevSlide() {
    if (slide === 0) return setSlide(slides.length - slidesAtOnce);

    setSlide(slide - 1);
  }

  function renderBullets() {
    const arr = [];

    for (let index = 0; index <= slides.length - slidesAtOnce; index++) {
      arr.push(
        <CarouselBullet
          key={index}
          index={index}
          bullet={bullet}
          setSlide={setSlide}
          activeIndex={slide}
          style={style && style.bullet}
        />
      );
    }

    return arr;
  }

  const isMultiSlide = slides.length > 1;

  return ((
    <MainContainer ref={sliderRef} style={style && style.root}>
      <Container>
        {isMultiSlide && withArrows && (
          <ArrowsContainer>
            <CarouselArrow
              arrow={arrow}
              style={style && style.arrow}
              direction="left"
              onClick={goToPrevSlide}
            />

            <CarouselArrow
              arrow={arrow}
              style={style && style.arrow}
              direction="right"
              onClick={goToNextSlide}
            />
          </ArrowsContainer>
        )}

        {isMultiSlide && withBullets && (
          <BulletsContainer>
            <BulletList>{renderBullets()}</BulletList>
          </BulletsContainer>
        )}

        {springProps.map(({ offset }, index) => (
          <animated.div
            {...gesture()}
            key={index}
            style={{
              transform: offset.interpolate(
                (offsetX) => `translate3d(${offsetX * 100}%, 0, 0)`
              ),
              position: "absolute",
              width: `${100 / slidesAtOnce}%`,
              height: "100%",
              willChange: "transform",
            }}
          >
            {slides[index]}
          </animated.div>
        ))}
      </Container>
    </MainContainer>
  ) as unknown) as TCarousel;
}

Carousel.Slide = CarouselSlide;
Carousel.Caption = CarouselCaption;

export default Carousel;
