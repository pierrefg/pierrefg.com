"use client";

import { debounce } from 'lodash';
import React, { useEffect, useState, useCallback, useRef } from 'react';

import RainAudio from './rainAudio';
import RainDisplay from './rainDisplay';
import Controls from './controls';
import { useUmbrella } from './hooks/useUmbrella';
import * as Tone from 'tone';

export default function Rain() {
    const [canvasSize, setCanvasSize] = useState(null);

    const sparsenessRef = useRef(40);
    const windFactorRef = useRef(0.1);

    const [dropsSet, setDropsSet] = useState([]);
    
    const [drops, setDrops] = useState([]);
    const [groundCollisions, setGroundCollisions] = useState([]);
    const [audioStarted, setAudioStarted] = useState(false);

    const mousePositionRef = useRef({ x: 0, y: 0 });
    const controlParamtersRef = useRef({ x: 0, y: 0 });

    const { umbrella, umbrellaCollisions, umbrellaSizeRef, generateUmbrella, generateUmbrellaCollisions } = useUmbrella(mousePositionRef, canvasSize);

    const handleStartAudio = useCallback(async () => {
        if (!audioStarted) await Tone.start();
        setAudioStarted((prev) => !prev);
    }, [audioStarted]);

    useEffect(() => {
        const handleResize = () => {
            setCanvasSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!canvasSize) return;

        const cWidth = canvasSize.width;
        const cHeight = canvasSize.height;

        let animationFrameId;
    
        const debouncedMouseMove = debounce((event) => {
            animationFrameId = requestAnimationFrame(() => {
                mousePositionRef.current = { x: event.clientX, y: event.clientY };
                controlParamtersRef.current = { x: event.clientX/cWidth, y: event.clientY/cHeight };
                generateUmbrella();
                sparsenessRef.current = 80+(1-controlParamtersRef.current.x)*150;
                windFactorRef.current = controlParamtersRef.current.x*0.3;
            });
        }, 5);
    
        window.addEventListener('mousemove', debouncedMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', debouncedMouseMove);
            cancelAnimationFrame(animationFrameId);
            debouncedMouseMove.cancel();
        };
    }, [canvasSize, generateUmbrella]);

    useEffect(() => {
        setDropsSet(
            Array.from({ length: 100 }, () => (
                [Math.random(), Math.random()].sort((a, b) => a - b)
            ))
        );
    }, []);

    const generateDrops = useCallback(() => {
        const cWidth = canvasSize.width;
        const cHeight = canvasSize.height;
        const sparseness = sparsenessRef.current;
        const umbrellaSize = umbrellaSizeRef.current;

        const nDrops = Math.floor(cWidth / sparseness);
        const drops_x_locations = Array.from({ length: nDrops }, () => Math.random() * cWidth);

        let mouseX = mousePositionRef.current.x;
        let mouseY = mousePositionRef.current.y;
        const umbrellaRange = [mouseX-umbrellaSize, mouseX+umbrellaSize];

        const tmp_drops = drops_x_locations.map(x0 => {
            const drop_extent = dropsSet[Math.floor(Math.random() * dropsSet.length)];
            let y0 = drop_extent[0] * cHeight;
            let y1 = drop_extent[1] * cHeight;

            const windCorrection = (windFactorRef.current + (0.1 + windFactorRef.current) * Math.random() * 0.1);
            let x1 = x0 + (y1 - y0) * windCorrection;
        
            if ((x0 > umbrellaRange[0] || x1 > umbrellaRange[0]) && (x0 < umbrellaRange[1] || x1 < umbrellaRange[1])) {
                y1 = Math.min(y1, mouseY); 
                x1 = x0 + (y1 - y0) * windCorrection;
                if (y0 >= y1) return null;
            }

            return {
                points: [
                    { x: x0, y: y0 },
                    { x: x1, y: y1 }
                ],
                opacity: Math.random(),
                width: Math.random() * 2
            };
        }).filter(item => item !== null); 
        
        setDrops(tmp_drops);

        const nGroundCollisions = Math.floor(cWidth / (3 * sparseness));
        setGroundCollisions(
            Array.from({ length: nGroundCollisions }, () => ({
                point: { x: Math.random() * cWidth, y: cHeight }
            }))
        );

        generateUmbrellaCollisions();
    }, [canvasSize, dropsSet, generateUmbrellaCollisions]);

    useEffect(() => {
        if (!canvasSize) return;
        const intervalId = setInterval(generateDrops, 100);
        return () => clearInterval(intervalId);
    }, [generateDrops]);

    if (!canvasSize) return;
    return (
        <div id="rain-container" className="h-full w-full">
            <Controls audioStarted={audioStarted} handleStartAudio={handleStartAudio} />
            {
                audioStarted && 
                <RainAudio
                    control={controlParamtersRef}
                />
            }
            <RainDisplay 
                drops={drops}
                groundCollisions={groundCollisions}
                umbrella={umbrella.current}
                umbrellaCollisions={umbrellaCollisions}
                paramA={controlParamtersRef.current.x}
                lightX={0}
                canvasSize={canvasSize}
                windFactorRef={windFactorRef}
            />
        </div>
    );
}
