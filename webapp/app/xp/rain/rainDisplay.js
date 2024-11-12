import React, { useEffect, useState } from 'react';

import Spot from './spot';

export default function RainDisplay({ drops, groundCollisions, umbrella, umbrellaCollisions, canvasSize, windFactorRef }) {
    const bgColor = 'black'
    const elementsColor = 'white';
    const rainColor = 'white';

    const [spotSpacing, setSpotSpacing] = useState(400);
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        if (!canvasSize) return;

        // let tmpSpots = [];
        // let currentSpotPosition = spotSpacing;
        // while (currentSpotPosition <= canvasSize.width) {
        //     tmpSpots.push(currentSpotPosition);
        //     currentSpotPosition += spotSpacing;
        // } 
        setSpots([canvasSize.width/2]);
    }, [canvasSize]);

    if (!canvasSize) return;

    return (
        <svg className="absolute z-40 bg-black" width="100%" height="100%">
            <filter id="grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" result="noise" />
                <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
            </filter>

            <defs>
                <linearGradient id="spotGradient" x1={canvasSize.width/2} y1={100} x2={canvasSize.width/2} y2={canvasSize.height}  gradientUnits="userSpaceOnUse">
                    <stop offset="10%" style={{ stopColor: elementsColor, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: bgColor, stopOpacity: 0 }} />
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
                {
                    groundCollisions.map((collision_point, index) => (
                        <circle 
                            key={index}
                            cx={collision_point.point.x} 
                            cy={collision_point.point.y - Math.random() * 5}
                            r={Math.random() * 2.5} 
                            fill={elementsColor} 
                        />
                    ))
                }
            </g>

            {
                spots.map(
                    (spotX, index) => (
                        <Spot 
                            key = {index} 
                            x = {spotX}
                            cordLength = {100}
                            spotWidth = {15}
                            lightSpreadAngle = {13}
                            canvasSize = {canvasSize}
                            color = {elementsColor}
                            windFactorRef = {windFactorRef}
                            umbrella = {umbrella}
                        />
                    )
                )
                
            }

            {
                umbrella && (
                    <g>
                        <path
                            d={umbrella.path}
                            fill="transparent"
                            stroke={elementsColor}
                            strokeWidth="3"
                            opacity="1"
                        />
                        {
                            umbrellaCollisions.map((collision_point, index) => (
                                <circle 
                                    key={index}
                                    cx={collision_point.point.x} 
                                    cy={collision_point.point.y - Math.random() * 5}
                                    r={Math.random() * 2.5} 
                                    fill={elementsColor} 
                                />
                            ))
                        }
                    </g>
                )
            }
        </svg>
    );
}