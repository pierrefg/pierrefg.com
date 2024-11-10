"use client";

import { debounce } from 'lodash';
import React, { useEffect, useState, useCallback, useRef } from 'react';

import RainAudio from './rainAudio';
import RainDisplay from './rainDisplay';
import Controls from './controls';
import * as Tone from 'tone';

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

    const mousePositionRef = useRef({ x: 0, y: 0 });
    const controlParamtersRef = useRef({ x: 0, y: 0 });

    const handleStartAudio = useCallback(async () => {
        if (!audioStarted) await Tone.start();
        setAudioStarted((prev) => !prev);
    }, [audioStarted]);

    const generateUmbrella = useCallback((mouseX, mouseY) => {
        const wHeight = window.innerHeight;
        setUmbrella({
            path: `M${mouseX - umbrellaSize},${mouseY} L${mouseX + umbrellaSize},${mouseY}`,
            polygon: `${mouseX - umbrellaSize},${mouseY} ${mouseX + umbrellaSize},${mouseY} ${mouseX + umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight} ${mouseX - umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight}`
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
            const max = 200;
            const min = 40;
            const relative = Math.floor(window.innerWidth * 0.05);
            setUmbrellaSize(Math.min(Math.max(min, relative), max));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let animationFrameId;
    
        const debouncedMouseMove = debounce((event) => {
            animationFrameId = requestAnimationFrame(() => {
                mousePositionRef.current = { x: event.clientX, y: event.clientY };
                controlParamtersRef.current = { x: event.clientX/window.innerWidth, y: event.clientY/window.innerHeight };
                generateUmbrella(event.clientX, event.clientY);
                generateUmbrellaCollisions(event.clientX, event.clientY);
            });
        }, 5);
    
        window.addEventListener('mousemove', debouncedMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', debouncedMouseMove);
            cancelAnimationFrame(animationFrameId);
            debouncedMouseMove.cancel();
        };
    }, [generateUmbrella, generateUmbrellaCollisions]);

    useEffect(() => {
        setDropsSet(
            Array.from({ length: 100 }, () => (
                [Math.random(), Math.random()].sort((a, b) => a - b)
            ))
        );
    }, []);

    const generateDrops = useCallback(() => {
        const wWidth = window.innerWidth;
        const wHeight = window.innerHeight;

        const nDrops = Math.floor(wWidth / sparseness);
        const drops_x_locations = Array.from({ length: nDrops }, () => Math.random() * wWidth);

        const tmp_drops = drops_x_locations.map(x_location => {
            const drop_extent = dropsSet[Math.floor(Math.random() * dropsSet.length)];
            const y0 = drop_extent[0] * wHeight;
            const y1 = drop_extent[1] * wHeight;
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
    }, [dropsSet, sparseness, windFactor, generateUmbrellaCollisions]);

    useEffect(() => {
        const intervalId = setInterval(generateDrops, 100);
        return () => clearInterval(intervalId);
    }, [generateDrops]);

    return (
        <div id="rain-container" className="h-full w-full">
            <Controls audioStarted={audioStarted} handleStartAudio={handleStartAudio} />
            {
                audioStarted && 
                <RainAudio
                    x={controlParamtersRef.current.x}
                    y={controlParamtersRef.current.y}
                />
            }
            <RainDisplay 
                drops={drops}
                groundCollisions={groundCollisions}
                umbrella={umbrella}
                umbrellaCollisions={umbrellaCollisions}
            />
        </div>
    );
}
