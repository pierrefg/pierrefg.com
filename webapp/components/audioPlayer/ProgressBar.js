'use client';

import { useState, useRef, useEffect } from 'react';

export default function ProgressBar({
    playedFraction,
    onSeekStart,
    onSeekEnd,
    onSeekChange,
}) {
    const progressBarRef = useRef(null);
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        const getNewFraction = (event) => {
            const progressBarRect = progressBarRef.current.getBoundingClientRect();
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const moveX = clientX - progressBarRect.left;
            const newFraction = Math.max(0, Math.min((moveX / progressBarRect.width), 1));
            return newFraction;
        };

        const handleMove = (event) => {
            if (isSeeking) {
                event.touches && event.preventDefault();
                const newFraction = getNewFraction(event);
                if (onSeekChange) onSeekChange(newFraction);
            }
        };

        const handleEnd = (event) => {
            if (isSeeking) {
                const newFraction = event.touches ? null : getNewFraction(event);
                !event.touches && document.body.classList.remove('no-select');
                setIsSeeking(false);
                if (onSeekEnd) onSeekEnd(newFraction);
            }
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isSeeking,  onSeekChange, onSeekEnd]);

    const handleStart = (event) => {
        setIsSeeking(true);
        !event.touches && document.body.classList.add('no-select');
        event.touches && event.preventDefault();
        if (onSeekStart) onSeekStart();
    };

    return (
        <div
            ref={progressBarRef}
            className='absolute top-0 left-0 w-full h-[5px] bg-primary z-10 cursor-pointer'
            onMouseDown={handleStart}
            onTouchStart={handleStart} // Handle touch start
        >
            <div
                className='absolute top-0 left-0 h-[5px] bg-primary-hover z-20'
                style={{
                    width: Math.round(playedFraction * 100) + '%'
                }}
            />
            <div
                className='absolute h-[15px] w-[15px] hover:h-[20px] hover:w-[20px] bg-primary-hover border-2 z-30 cursor-pointer'
                style={{
                    left: Math.round(playedFraction * 100) + '%',
                    transform: 'translate(-50%, -50%)',
                    top: '50%'
                }}
            />
        </div>
    );
}
