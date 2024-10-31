"use client";

import React, { useEffect, useState } from 'react';

function generatePoints(n, start, end) {
    return Array.from({ length: n }, () => Math.random() * (end - start) + start);
}

export default function Rain() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [drops, setDrops] = useState([]);
    const [collisions, setCollisions] = useState([]);

    const umbrellaSize = 100;
    const windFactor = 0.1;

    const generatePath = (points) => {
        let path = '';
        if (points.length !== 0) {
            const [firstPoint, ...otherPoints] = points;
            path += `M${firstPoint.x},${firstPoint.y} L`;
            for (let point of otherPoints) {
                path += `${point.x},${point.y} `;
            }
        }
        return path;
    };

    const generateUmbrellaCollisions = (mouseX, mouseY) => {
        const wWidth = window.innerWidth;
        const wHeight = window.innerHeight;
        const tmpCollisions = Array.from({ length: 15 }, () => ({
            point: { x: Math.random() * wWidth, y: wHeight }
        })).concat(
            Array.from({ length: 3 }, () => ({
                point: {
                    x: mouseX - umbrellaSize + Math.random() * 2 * umbrellaSize,
                    y: mouseY-2
                }
            }))
        );
        setCollisions(tmpCollisions);
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
            generateUmbrellaCollisions(event.clientX, event.clientY);            
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const wWidth = window.innerWidth;
            const wHeight = window.innerHeight;

            // Generate drops
            const drops_x_locations = generatePoints(50, 0, wWidth);
            const tmp_drops = drops_x_locations.map(x_location => {
                const drop_extent = generatePoints(2, 0, wHeight).sort((a, b) => a - b);
                return {
                    points: [
                        { x: x_location, y: drop_extent[0] },
                        { x: x_location + (drop_extent[1] - drop_extent[0]) * windFactor, y: drop_extent[1] }
                    ],
                    opacity: Math.random(),
                    width: Math.random() * 2
                };
            });
            setDrops(tmp_drops);
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId2 = setInterval(() => {
            generateUmbrellaCollisions(mousePosition.x, mousePosition.y);  
        }, 80);

        return () => clearInterval(intervalId2);
    }, [mousePosition]);

    return (
        <div id="rain-container" className="h-full w-full">
            <h1 className="absolute text-4xl m-7">RAIN</h1>

            <svg className="absolute" width="100%" height="100%">
                {drops.map((path, index) => (
                    <path
                        key={index}
                        d={generatePath(path.points)}
                        fill="transparent"
                        stroke="white"
                        strokeWidth={path.width}
                        opacity={path.opacity}
                    />
                ))}
                <path
                    d={`M${mousePosition.x - umbrellaSize},${mousePosition.y} L${mousePosition.x + umbrellaSize},${mousePosition.y}`}
                    fill="transparent"
                    stroke="white"
                    strokeWidth="3"
                    opacity="1"
                />
                <polygon
                    points={`
                        ${mousePosition.x - umbrellaSize},${mousePosition.y}
                        ${mousePosition.x + umbrellaSize},${mousePosition.y} 
                        ${mousePosition.x + umbrellaSize + (window.innerHeight - mousePosition.y) * windFactor},${window.innerHeight} 
                        ${mousePosition.x - umbrellaSize + (window.innerHeight - mousePosition.y) * windFactor},${window.innerHeight}
                    `}
                    fill="black"
                    stroke="transparent"
                    strokeWidth="0"
                    opacity="1"
                />
                {collisions.map((collision_point, index) => (
                    <g key={index}>
                        <circle cx={collision_point.point.x} cy={collision_point.point.y} r="2" fill="white" />
                    </g>
                ))}
            </svg>
        </div>
    );
}
