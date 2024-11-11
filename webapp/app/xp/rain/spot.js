import React, { useEffect, useState, useRef } from 'react';


function getBinaryFlickerIntensity(time, frequency = 10, flickerProbability = 0.3) {
    const periodicFlicker = Math.sin(frequency * time) > 0;
    const randomFlicker = Math.random() < flickerProbability;
    return (periodicFlicker || randomFlicker) ? 1 : 0;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function findIntersection(segment1, segment2) {
    const [x1, y1] = segment1.p1;
    const [x2, y2] = segment1.p2;
    const [x3, y3] = segment2.p1;
    const [x4, y4] = segment2.p2;
    
    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    
    if (denominator === 0) {
        return null;
    }
    
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;
    
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        const intersectionX = x1 + t * (x2 - x1);
        const intersectionY = y1 + t * (y2 - y1);
        return [intersectionX, intersectionY];
    }
    
    return null;
}

export default function Spot({ x, cordLength, spotWidth, color, lightSpreadAngle, canvasSize, windFactorRef, umbrella }) {
    const timeRef = useRef(Math.random()*100);
    const [spotWiggle, setSpotWiggle] = useState(0);
    const spotMass = useRef(0.5+Math.random()*0.2);

    const spotIntensityRef = useRef(1);
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
        spotIntensityRef.current = getBinaryFlickerIntensity(timeRef.current);
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
    if (!umbrella) return null;

    const finalSpotAngle = -1*windFactorRef.current*70+spotWiggle;
    const finalSpotAngleRads = degreesToRadians(finalSpotAngle);

    const spotX = x - Math.sin(finalSpotAngleRads)*cordLength;
    const spotY = Math.cos(finalSpotAngleRads)*cordLength;
    const spot = [spotX, spotY];

    const lightReach = 8000;
    const lightSpreadAngleRads = degreesToRadians(-lightSpreadAngle)

    const RTotalCompAngleRad = Math.PI - (finalSpotAngleRads+lightSpreadAngleRads)
    const RTotalLength = Math.sin(finalSpotAngleRads)*cordLength + Math.sin(lightSpreadAngleRads)*lightReach;
    const coneBRX = x + Math.sin(RTotalCompAngleRad)*RTotalLength;
    const coneBRY = Math.cos(RTotalCompAngleRad)*RTotalLength;
    const coneBR = [coneBRX, coneBRY];

    const LTotalCompAngleRad = Math.PI - (finalSpotAngleRads-lightSpreadAngleRads)
    const LTotalLength = Math.sin(finalSpotAngleRads)*cordLength + Math.sin(lightSpreadAngleRads)*lightReach;
    const coneBLX = x + Math.sin(LTotalCompAngleRad)*LTotalLength;
    const coneBLY = Math.cos(LTotalCompAngleRad)*LTotalLength;
    const coneBL = [coneBLX, coneBLY];

    const interR = findIntersection(
        {p1: spot, p2: coneBR},
        {p1: umbrella.left, p2: umbrella.right},
    )

    const interL = findIntersection(
        {p1: spot, p2: coneBL},
        {p1: umbrella.left, p2: umbrella.right},
    )

    const ux = [umbrella.left[0], umbrella.right[0]]
    let lightShape = [spot, coneBR, coneBL]
    if (umbrella.left[1]<spotY) {
        let lightShape = [spot, coneBR, coneBL];
    } else if(interR && interL) {
        console.log("inter both")
        lightShape = [spot, interR, interL]
    } else if (interR) {
        console.log("inter right")
        lightShape = [spot, interR, umbrella.left, coneBL]
    } else if (interL) {
        console.log("inter left")
        lightShape = [spot, coneBR, umbrella.right, interL]
    } else {
        
        if(ux[1]<spotX || ux[1]<coneBLX) {
            console.log("to the left")
            lightShape = [spot, coneBR, coneBL]
        } else if (ux[0]>spotX || ux[0]>coneBRX) {
            lightShape = [spot, coneBR, coneBL]
            console.log("to the right")
        } else {
            lightShape = [spot, coneBR, umbrella.right, umbrella.left, coneBL]
            console.log("inside")
        }
    }
    console.log(lightShape)

    return (
        <g >
            
            <path
                d={`M${x},0 L${spotX},${spotY}`}
                fill="transparent"
                stroke={color}
                strokeWidth={1}
                opacity={0.8}
            />
            <g>
                <polygon
                    points={lightShape.map(([x, y]) => `${x},${y}`).join(' ')}
                    fill="url(#spotGradient)"
                    opacity={0.9*spotIntensityRef.current}
                    style={{'mix-blend-mode': 'multiply'}}
                />
                <rect
                    x={x - spotWidth / 2}
                    y={cordLength - spotWidth / 2}
                    width={spotWidth}
                    height={spotWidth}
                    fill={color}
                    transform={`rotate(${finalSpotAngle}, ${x}, 0)`}
                />
            </g>
        </g>
    );
}
