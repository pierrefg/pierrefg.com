"use client";

import React, { useEffect, useRef } from "react";
import { Noise } from "noisejs";

export default function GaussianOcean({
    colorFar = "#500052",
    colorNear = "#ffffff",
}) {
    const canvasRef = useRef(null);
    const noiseRef = useRef(null);
    const rafRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const res = 15;
        const scale = 0.06;
        const timeScale = 0.0002;

        const symbols = [
            " ", "_", ".", "*", "o", "X",
            "-", "+", "=", "~", "^", ":", ";",
            ",", "`", "'", "\"", "/", "\\", "|",
            "(", ")", "[", "]", "{", "}",
            "<", ">", "!", "?", "#", "%", "&", "@",
            "$", "0", "O",
            "·", "•", "◦", "○", "●", "□", "■", "△", "▲", "◇", "◆"
        ];

        noiseRef.current = new Noise(Math.random());

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let cols = 0;
        let rows = 0;
        let width = 0;
        let height = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            cols = Math.ceil(width / res);
            rows = Math.ceil(height / res);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = (timestamp) => {

            const time = timestamp * timeScale;

            ctx.clearRect(0, 0, width, height);

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const raw = noiseRef.current.perlin3(x * scale, y * scale, time);
                    const value = (raw + 1) / 2;

                    if (raw < 0.3) continue

                    const cellCenterX = x * res;
                    const cellCenterY = y * res;

                    const symbolIndex = Math.min(
                        symbols.length - 1,
                        Math.floor(value * symbols.length)
                    );
                    const symbol = symbols[symbolIndex];

                    if (symbol === " ") continue;

                    ctx.fillStyle = `rgb(128, 0, 128)`;
                    ctx.globalAlpha = 0.8;
                    ctx.fillText(symbol, cellCenterX, cellCenterY);
                    // ctx.fillRect(cellCenterX, cellCenterY, res, res)
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        }

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [colorFar, colorNear]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
}