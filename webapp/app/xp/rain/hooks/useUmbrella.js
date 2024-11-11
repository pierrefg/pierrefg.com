'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export function useUmbrella(mousePositionRef, canvasSize) {
    const umbrella = useRef(null);
    const umbrellaSizeRef = useRef(100);
    const [umbrellaCollisions, setUmbrellaCollisions] = useState([]);

    // Function to generate the umbrella's shape based on the mouse position
    const generateUmbrella = useCallback(() => {
        if (!canvasSize) return;
        
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        const umbrellaSize = umbrellaSizeRef.current;
        const wHeight = canvasSize.height;
        const windFactor = 0.1; // Define wind factor here or pass it as a prop/ref if dynamic

        umbrella.current = {
            path: `M${mouseX - umbrellaSize},${mouseY} L${mouseX + umbrellaSize},${mouseY}`,
            polygon: `
                ${mouseX - umbrellaSize},${mouseY} 
                ${mouseX + umbrellaSize},${mouseY} 
                ${mouseX + umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight} 
                ${mouseX - umbrellaSize + (wHeight - mouseY) * windFactor},${wHeight}
            `
        };
    }, [canvasSize, mousePositionRef]);

    // Function to generate umbrella collision points for raindrops
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

    // Effect to handle umbrella resizing on window resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         const max = 200;
    //         const min = 40;
    //         const relative = Math.floor(window.innerWidth * 0.05);
    //         umbrellaSizeRef.current = Math.min(Math.max(min, relative), max);
    //     };

    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return { umbrella, umbrellaCollisions, umbrellaSizeRef, generateUmbrella, generateUmbrellaCollisions };
}