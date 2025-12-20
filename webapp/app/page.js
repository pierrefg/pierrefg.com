'use client';

import React, { useState, useEffect, useRef } from 'react';

import LandingA from './content/LandingA';
import LandingB from './content/LandingB';

export default function Landing() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); 
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="landing">
            <div className="relative h-screen flex flex-col justify-between animate-fadeIn mb-[20px]">
                <LandingA />
            </div>
            <div 
                ref={domRef}
                id='about' 
                className={`h-screen flex flex-col justify-between items-center ${
                    isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`} 
            >
                <LandingB />
            </div>
        </div>
    ) 
}