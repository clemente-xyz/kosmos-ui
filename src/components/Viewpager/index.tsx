import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

function Viewpager({ sources }: { sources: string[] }) {
  const index = useRef(0);

  const [props, set] = useSprings(sources.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
  }));

  const bind = useGesture(
    //@ts-ignore
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }: any) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            sources.length - 1
          ))
        );

      //@ts-ignore
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );

  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      <animated.div
        style={{
          transform: sc.interpolate((s) => `scale(${s})`),
          backgroundImage: `url(${sources[i]})`,
        }}
      />
    </animated.div>
  ));
}

export default Viewpager;
