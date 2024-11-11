import React, { useEffect, useState } from 'react';

import Spot from './spot';

export default function RainDisplay({ drops, groundCollisions, umbrella, umbrellaCollisions, paramA=1, canvasSize, windFactorRef }) {
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
        <svg className="absolute z-40 bg-black" width="100%" height="100%">
            <defs>
                <linearGradient id="spotGradient" x1="0%" y1="0%" x2={"0%"} y2="100%">
                    <stop offset="0%" style={{ stopColor: elementsColor, stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: bgColor, stopOpacity: 0 }} />
                </linearGradient>
            </defs>

            {
                spots.map(
                    (spotX, index) => (
                        <Spot 
                            key={index} 
                            x = {spotX}
                            y = {100}
                            spotWidth={15}
                            lightWidth={300}
                            canvasSize={canvasSize}
                            color={elementsColor}
                            windFactorRef={windFactorRef}
                        />
                    )
                )
                
            }

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

            {umbrella && (
                <g>
                    <path
                        d={umbrella.path}
                        fill="transparent"
                        stroke={elementsColor}
                        strokeWidth="3"
                        opacity="1"
                    />
                    {/* <polygon points={umbrella.polygon} fill={bgColor} opacity="1" /> */}
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
    );
}