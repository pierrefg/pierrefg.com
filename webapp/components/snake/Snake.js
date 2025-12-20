"use client";

import './style.css';

import React, { useEffect, useState } from 'react';

export default function Snake({color= 'purple', big_interval_time=2000}) {
    const n_points = 10;

    const max_opacity = 0.4;
    // const big_interval_time = Math.random()*8*1000;
    const small_interval_time = Math.random()*2*100;

    const [paths, setPaths] = useState([]);
    const [x_delta, setXDelta] = useState([]);
    const [y_delta, setYDelta] = useState([]);

    const genRandPoints = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const rand_points = [];
        for (let i = 0; i < n_points; i++) {
            let point = { x: Math.random() * width, y: Math.random() * height };
            rand_points.push(point);
        }
        setXDelta((Math.random()-0.5) * width * 0.1);
        setYDelta((Math.random()-0.5) * width * 0.1);
        return rand_points;
    };

    const generatePath = (points) => {
        let path = '';
        if (points.length !== 0) {
            let [firstPoint, ...otherPoints] = points;
            path += `M${firstPoint.x}, ${firstPoint.y} C`;
            for (let point of otherPoints) {
                path += `${point.x},${point.y} `;
            }
        }
        return path;
    };

    useEffect(() => {
        const big_interval = setInterval(() => {
            setPaths([{ 
                points: genRandPoints(), 
                opacity: max_opacity
            }]);
        }, big_interval_time);

        return () => clearInterval(big_interval);
    }, []);

    useEffect(() => {
        const small_interval = setInterval(() => {
            setPaths((prevPaths) => {
                if (prevPaths.length === 0) return prevPaths;

                let newPaths = [...prevPaths];
                let lastPath = newPaths[newPaths.length - 1];
                let newPoints = lastPath.points.map((point, index) => ({
                    x: point.x + 0.1*index*x_delta,
                    y: point.y + 0.1*index*y_delta,
                }));

                if (lastPath.opacity > 0) {
                    newPaths.push({
                        points: newPoints,
                        opacity: lastPath.opacity - 0.05,
                    });
                }

                return newPaths;
            });
        }, small_interval_time);

        return () => clearInterval(small_interval);
    }, [paths]);

    return (
        <svg className="snake absolute top-0 left-0 w-full h-full">
            {paths.map((path, index) => (
                <path
                    key={index}
                    d={generatePath(path.points)}
                    fill="transparent"
                    stroke={color}
                    strokeWidth="2"
                    opacity={path.opacity}
                />
            ))}
        </svg>
    );
}
