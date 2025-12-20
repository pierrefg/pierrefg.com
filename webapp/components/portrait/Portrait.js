'use client';

import { useEffect, useRef, useState } from 'react';
import useStore from '@/store/useStore';
import Image from "next/image";

import portraitPic from './portrait.jpg';

export default function Portrait({ size = 220 }) {
    const { darkMode } = useStore();
    const portraitRef = useRef(null);
    const [hasMounted, setHasMounted] = useState(false);
    
    const [currentSpin, setCurrentSpin] = useState(0);

    useEffect(() => {
        if (!hasMounted) {
            setHasMounted(true);
            return;
        }

        const element = portraitRef.current;

        if (element) {
            const rotation_dir = darkMode ? 1 :-1;
            const rotation_deg = currentSpin + rotation_dir*360
            const rotation = `rotate(${rotation_deg}deg)`
            setCurrentSpin(rotation_deg)
            element.style.transition = 'transform 2s ease-in-out';
            element.style.transform = rotation;
        }
    }, [darkMode]);

    return (
        <Image
            src={portraitPic}
            alt="pierrefg"
            width={size}
            height={size}
            className="rounded-full portrait-comp hover:animate-pulse"
            priority
            ref={portraitRef}
        />
    );
}
