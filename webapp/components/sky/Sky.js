"use client";

import React, { useEffect, useState } from "react";

export default function Sky({ color = "purple", big_interval_time = 2000 }) {
    const n_points = 70;
    const [stars, setStars] = useState([]);

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
            duration: Math.random() * 2 + 1.5, // 1.5s to 3.5s
            delay: Math.random() * 3,          // stagger start
            scale: Math.random() * 0.4 + 1.0,  // peak pulse size
        }));
    };

    useEffect(() => {
        setStars(genStars());
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

            {stars.map((star, index) => (
                <div
                    key={index}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${star.x}px`,
                        top: `${star.y}px`,
                        transform: "translate(-50%, -50%)",
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
            ))}
        </>
    );
}