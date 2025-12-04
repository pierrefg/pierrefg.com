'use client';

import React, { useEffect, useState } from "react";

export default function AnimatedText({ targetText }) {
  const [mounted, setMounted] = useState(false);
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate random delays only on client
    setDelays(
      targetText.split("").map((_, i) => i * 50 + Math.random() * 200)
    );
  }, [targetText]);

  return (
    <span className="animated-text">
      {targetText.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.3s ease ${delays[index] || index * 50}ms, transform 0.3s ease ${delays[index] || index * 50}ms`,
            display: 'inline-block'
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
