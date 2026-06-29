'use client';

import React, { useEffect, useMemo, useState } from 'react';

export default function AnimatedText({
  texts = [],
  holdTime = 2000,
  staggerBase = 50,
  randomExtra = 200,
}) {
  const safeTexts = useMemo(
    () => texts.filter((text) => typeof text === 'string' && text.length > 0),
    [texts]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [delays, setDelays] = useState([]);

  const currentText = safeTexts[currentIndex] || '';

  useEffect(() => {
    if (safeTexts.length <= 1) return;

    const intervalId = setInterval(() => {
      setMounted(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % safeTexts.length);
      }, 350);
    }, holdTime + 350);

    return () => clearInterval(intervalId);
  }, [safeTexts, holdTime]);

  useEffect(() => {
    setMounted(false);

    const nextDelays = currentText.split('').map(
      (_, i) => i * staggerBase + Math.random() * randomExtra
    );
    setDelays(nextDelays);

    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 30);

    return () => clearTimeout(timeoutId);
  }, [currentText, staggerBase, randomExtra]);

  if (!safeTexts.length) return null;

  return (
    <span className="animated-text" aria-live="polite">
      {currentText.split('').map((char, index) => (
        <span
          key={`${currentText}-${index}`}
          className="char"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.3s ease ${delays[index] ?? index * staggerBase}ms, transform 0.3s ease ${delays[index] ?? index * staggerBase}ms`,
            display: 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}