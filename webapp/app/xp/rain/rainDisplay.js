import React, { useEffect, useState } from 'react';

import Spot from './spot';

export default function RainDisplay({ drops, groundCollisions, umbrella, umbrellaCollisions, canvasSize, windFactorRef }) {
    const bgColor = 'black'
    const elementsColor = 'white';
    const rainColor = 'white';

    const [spotSpacing, setSpotSpacing] = useState(400);
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        let tmpSpots = [];
        let currentSpotPosition = spotSpacing;
        while (currentSpotPosition <= canvasSize.width) {
            tmpSpots.push(currentSpotPosition);
            currentSpotPosition += spotSpacing;
        } 
        setSpots(tmpSpots);
        console.log(spots)
    }, [canvasSize]);

    if (!canvasSize) return;

    return (
        <>
        {/* <svg width="0" height="0">
            <filter id="grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" result="noise" />
                <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
            </filter>
        </svg> */}

        <svg className="absolute z-40 bg-black" width="100%" height="100%" filter="url(#grain)">
            <defs>
                <linearGradient id="spotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: elementsColor, stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: bgColor, stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="90%" style={{ stopColor: bgColor, stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: elementsColor, stopOpacity: 0.2 }} />
                </linearGradient>
            </defs>

            {/* <rect
                width='100%'
                height='100%'
                fill='url(#backgroundGradient)'
            /> */}

            

            <g>
                {
                    drops.map((path, index) => (
                        <path
                            key={index}
                            d={`M${path.points[0].x},${path.points[0].y} L${path.points[1].x},${path.points[1].y}`}
                            fill="transparent"
                            stroke={rainColor}
                            strokeWidth={path.width}
                            opacity={path.opacity}
                        />
                    ))
                }
                {groundCollisions.map((collision_point, index) => (
                    <circle 
                        key={index}
                        cx={collision_point.point.x} 
                        cy={collision_point.point.y - Math.random() * 5}
                        r={Math.random() * 2.5} 
                        fill={elementsColor} 
                    />
                ))}
            </g>

            {
                spots.map(
                    (spotX, index) => (
                        <Spot 
                            key = {index} 
                            x = {spotX}
                            cordLength = {100}
                            spotWidth = {15}
                            lightSpreadAngle = {10}
                            canvasSize = {canvasSize}
                            color = {elementsColor}
                            windFactorRef = {windFactorRef}
                            umbrella = {umbrella}
                        />
                    )
                )
                
            }

            {umbrella && (
                <g>
                    <path
                        d={umbrella.path}
                        fill="transparent"
                        stroke={elementsColor}
                        strokeWidth="3"
                        opacity="1"
                    />
                    {umbrellaCollisions.map((collision_point, index) => (
                        <circle 
                            key={index}
                            cx={collision_point.point.x} 
                            cy={collision_point.point.y - Math.random() * 5}
                            r={Math.random() * 2.5} 
                            fill={elementsColor} 
                        />
                    ))}
                </g>
            )}
        </svg>
        </>
    );
}