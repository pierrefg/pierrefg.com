"use client";

import React, { useEffect, useState } from "react";

export default function Sky({ color = "purple" }) {
    const n_points = 70;
    const [stars, setStars] = useState([]);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const genStars = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const symbols = ["+", "*", "x", "o", ".", "•"];

        return Array.from({ length: n_points }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: Math.random() * 0.5 + 0.35,
            textSize: Math.random() * 15 + 5,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            duration: Math.random() * 2 + 1.5,
            delay: Math.random() * 3,
            depth: Math.random() * 30 + 5, // parallax strength
        }));
    };

    useEffect(() => {
        setStars(genStars());

        const handleMouseMove = (e) => {
            const offsetX = e.clientX - window.innerWidth / 2;
            const offsetY = e.clientY - window.innerHeight / 2;
            setMouse({ x: offsetX, y: offsetY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes starPulse {
                    0% {
                        opacity: 0.2;
                        transform: scale(0.85);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.15);
                    }
                    100% {
                        opacity: 0.2;
                        transform: scale(0.85);
                    }
                }
            `}</style>

            {stars.map((star, index) => {
                const moveX = mouse.x / star.depth;
                const moveY = mouse.y / star.depth;

                return (
                    <div
                        key={index}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${star.x}px`,
                            top: `${star.y}px`,
                            transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`,
                            transition: "transform 0.20s ease-out",
                        }}
                    >
                        <div
                            className="absolute"
                            style={{
                                color: "white",
                                opacity: 0.6,
                                fontSize: `${star.textSize}px`,
                            }}
                        >
                            {star.symbol}
                        </div>

                        <div
                            className="absolute"
                            style={{
                                color,
                                fontSize: `${star.textSize}px`,
                                animationName: "starPulse",
                                animationDuration: `${star.duration}s`,
                                animationDelay: `${star.delay}s`,
                                animationIterationCount: "infinite",
                                animationTimingFunction: "ease-in-out",
                                transformOrigin: "center",
                                opacity: star.opacity,
                            }}
                        >
                            {star.symbol}
                        </div>
                    </div>
                );
            })}
        </>
    );
}