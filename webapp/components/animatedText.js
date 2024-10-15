'use client';

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

export default function AnimatedText({ targetText }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setShow(true);
  }, []);

  const springs = targetText.split("").map((item, index) =>
    useSpring({
      opacity: show ? 1 : 0, // Start at opacity 0 and animate to 1 when `show` becomes true
      from: { opacity: 0 },
      delay: index * 40 + Math.random() * 250,
    })
  );

  return (
    <>
      {targetText.split("").map((item, index) => (
        <animated.span key={index} style={springs[index]}>
          {item}
        </animated.span>
      ))}
    </>
  );
}
