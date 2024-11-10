"use client";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import RainAudio from './rainAudio';
import * as Tone from 'tone'; 
import SimpleLink from '@/components/SimpleLink';
import { MdOutlineMusicNote, MdOutlineMusicOff  } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export default function Rain() {
    const sparseness = 40;
    const windFactor = 0.1;

    const [dropsSet, setDropsSet] = useState([]);
    const [drops, setDrops] = useState([]);
    const [groundCollisions, setGroundCollisions] = useState([]);
    const [umbrellaCollisions, setUmbrellaCollisions] = useState([]);
    const [umbrella, setUmbrella] = useState(null);
    const [umbrellaSize, setUmbrellaSize] = useState(5);
    const [audioStarted, setAudioStarted] = useState(false);

    // Ref pour stocker la position de la souris
    const mousePositionRef = useRef({ x: 0, y: 0 });

    const handleStartAudio = useCallback(async () => {
        if (!audioStarted) await Tone.start();
        setAudioStarted(!audioStarted);
    }, [audioStarted]);

    const generateUmbrella = useCallback((mouseX, mouseY) => {
        const wHeight = window.innerHeight;
        setUmbrella({
            path: `
                M${mouseX - umbrellaSize},${mouseY} 
                L${mouseX + umbrellaSize},${mouseY}
            `,
            polygon: `
                ${mouseX - umbrellaSize},${mouseY}
                ${mouseX + umbrellaSize},${mouseY} 
                ${mouseX + umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight} 
                ${mouseX - umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight}
            `
        });
    }, [umbrellaSize, windFactor]);

    const generateUmbrellaCollisions = useCallback((mouseX, mouseY) => {
        setUmbrellaCollisions(
            Array.from({ length: 3 }, () => ({
                point: { x: mouseX - umbrellaSize + Math.random() * 2 * umbrellaSize, y: mouseY - 2 }
            }))
        );
    }, [umbrellaSize]);

    useEffect(() => {
        const handleResize = () => {
            let max = 200;
            let min = 40;
            let relative = Math.floor(window.innerWidth*0.05);
            setUmbrellaSize(Math.min(Math.max(min, relative), max));
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mousePositionRef.current = { x: event.clientX, y: event.clientY };
            generateUmbrella(event.clientX, event.clientY);
            generateUmbrellaCollisions(event.clientX, event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [generateUmbrella, generateUmbrellaCollisions]);

    useEffect(() => {
        setDropsSet(
            Array.from({ length: 100 }, () => (
                    [Math.random(), Math.random()].sort((a, b) => a - b)
                )
            )
        )
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const wWidth = window.innerWidth;
            const wHeight = window.innerHeight;

            const nDrops =  Math.floor(wWidth/sparseness);
            const drops_x_locations = Array.from({ length: nDrops }, () => Math.random() * wWidth);
            const tmp_drops = drops_x_locations.map(x_location => {
                const drop_extent = dropsSet[Math.floor(Math.random() * dropsSet.length)];
                let y0 = drop_extent[0] * wHeight;
                let y1 = drop_extent[1] * wHeight;
                return {
                    points: [
                        { x: x_location, y: y0 },
                        { x: x_location + (y1 - y0) * windFactor, y: y1 }
                    ],
                    opacity: Math.random(),
                    width: Math.random() * 2
                };
            });
            setDrops(tmp_drops);

            const nGroundCollisions = Math.floor(wWidth / (3 * sparseness));
            setGroundCollisions(
                Array.from({ length: nGroundCollisions }, () => ({
                    point: { x: Math.random() * wWidth, y: wHeight }
                }))
            );

            const { x, y } = mousePositionRef.current;
            generateUmbrellaCollisions(x, y);
        }, 80);

        return () => clearInterval(intervalId);
    }, [dropsSet, sparseness, windFactor, generateUmbrellaCollisions]);

    return (
        <div id="rain-container" className="h-full w-full">
            <div className='absolute m-7 z-50'>
                <h1 className=" text-4xl">RAIN</h1>
                <div className='flex flex-row gap-2'>
                    <SimpleLink content={{icon: <AiOutlineHome />, link: '/'}} />
                    <button
                        onClick={handleStartAudio}
                        className="btn btn-secondary"
                    >
                        { audioStarted ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
                    </button>
                </div>
            </div>
            
            { audioStarted && <RainAudio /> }

            <svg className="absolute z-40" width="100%" height="100%">
                <g>
                    {
                        drops.map((path, index) => (
                            <path
                                key={index}
                                d={`M${path.points[0].x},${path.points[0].y} L${path.points[1].x},${path.points[1].y}`}
                                fill="transparent"
                                stroke="white"
                                strokeWidth={path.width}
                                opacity={path.opacity}
                            />
                        ))
                    }
                    {
                        groundCollisions.map((collision_point, index) => (
                            <g key={index}>
                                <circle 
                                    cx={collision_point.point.x} 
                                    cy={collision_point.point.y - Math.random() * 5}
                                    r={Math.random() * 2.5} 
                                    fill="white" 
                                />
                            </g>
                        ))
                    }
                </g>
                {
                    umbrella &&
                    <g>
                        <path
                            d={umbrella.path}
                            fill="transparent"
                            stroke="white"
                            strokeWidth="3"
                            opacity="1"
                        />
                        <polygon points={umbrella.polygon} fill="black" opacity="1" />
                        {
                            umbrellaCollisions.map((collision_point, index) => (
                                <g key={index}>
                                    <circle 
                                        cx={collision_point.point.x} 
                                        cy={collision_point.point.y - Math.random() * 5}
                                        r={Math.random() * 2.5} 
                                        fill="white" 
                                    />
                                </g>
                            ))
                        }
                    </g>
                }
            </svg>
        </div>
    );
}
