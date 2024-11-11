'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export function useUmbrella(mousePositionRef, canvasSize) {
    const umbrella = useRef(null);
    const umbrellaSizeRef = useRef(100);
    const [umbrellaCollisions, setUmbrellaCollisions] = useState([]);

    const generateUmbrella = useCallback(() => {
        if (!canvasSize) return;
        
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        const umbrellaSize = umbrellaSizeRef.current;

        umbrella.current = {
            path: `
                M${mouseX - umbrellaSize},${mouseY} 
                L${mouseX + umbrellaSize},${mouseY}
            `,
            left: [mouseX - umbrellaSize, mouseY],
            right: [mouseX + umbrellaSize, mouseY],
        };
    }, [canvasSize, mousePositionRef]);

    const generateUmbrellaCollisions = useCallback(() => {
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        const umbrellaSize = umbrellaSizeRef.current;

        setUmbrellaCollisions(
            Array.from({ length: 3 }, () => ({
                point: { 
                    x: mouseX - umbrellaSize + Math.random() * 2 * umbrellaSize, 
                    y: mouseY - 2 
                }
            }))
        );
    }, [mousePositionRef]);

    useEffect(() => {
        if (!canvasSize) return;

        const max = 200;
        const min = 40;
        const relative = Math.floor(canvasSize.width * 0.05);
        umbrellaSizeRef.current = Math.min(Math.max(min, relative), max);
    }, [canvasSize]);

    return { umbrella, umbrellaCollisions, umbrellaSizeRef, generateUmbrella, generateUmbrellaCollisions };
}