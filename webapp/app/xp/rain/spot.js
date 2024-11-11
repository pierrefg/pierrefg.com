import React, { useEffect, useState, useRef } from 'react';


function getBinaryFlickerIntensity(time, frequency = 10, flickerProbability = 0.3) {
    const periodicFlicker = Math.sin(frequency * time) > 0;
    const randomFlicker = Math.random() < flickerProbability;
    return (periodicFlicker || randomFlicker) ? 1 : 0;
}



export default function Spot({ x, y, spotWidth, color, lightWidth, canvasSize, windFactorRef }) {
    const timeRef = useRef(Math.random()*100);
    const [spotWiggle, setSpotWiggle] = useState(0);
    const spotMass = useRef(0.5+Math.random()*0.2);

    const [spotIntensity, setSpotIntensity] = useState(1);
    const spotIsStableRef = useRef(true);

    const updateWiggle = () => {
        setSpotWiggle(
            (
                Math.cos(timeRef.current*70)
                + 0.3 * Math.random() * Math.sin(timeRef.current*60)
            ) * (0.3 + 4 * spotMass.current * windFactorRef.current)
        );
    };
    
    const updateIntensity = () => {
        setSpotIntensity(getBinaryFlickerIntensity(timeRef.current));
    };

    useEffect(() => {
        const int = setInterval(() => {
            const windFactor = windFactorRef.current;
            timeRef.current += 2*(0.01 * spotMass.current + 0.01 * windFactor);
            updateWiggle();
        
            if (spotIsStableRef.current) {
                if (Math.random() < 0.03) spotIsStableRef.current = false;
            } else {
                updateIntensity();
                if (Math.random() < 0.1) spotIsStableRef.current = true;
            }
        }, 50);
        return () => clearInterval(int);
    }, []);

    if (!canvasSize) return null;

    const finalSpotAngle = -1*windFactorRef.current*70+spotWiggle;

    return (
        <g transform={`rotate(${finalSpotAngle}, ${x}, 0)`}>
            
            <path
                d={`M${x},0 L${x},${y}`}
                fill="transparent"
                stroke={color}
                strokeWidth={1}
                opacity={0.8}
            />
            <g>
                <polygon
                    points={`
                        ${x},${y} 
                        ${x + lightWidth},${canvasSize.height + 500} 
                        ${x - lightWidth},${canvasSize.width}
                    `}
                    fill="url(#spotGradient)"
                    opacity={spotIntensity}
                />
                <rect
                    x={x - spotWidth / 2}
                    y={y - spotWidth / 2}
                    width={spotWidth}
                    height={spotWidth}
                    fill={color}
                />
            </g>
        </g>
    );
}
