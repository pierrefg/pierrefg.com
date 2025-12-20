'use client';

import { useState, useRef, useEffect } from 'react';

import { FaPlay, FaPause } from "react-icons/fa6";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";

import ProgressBar from './ProgressBar';

import { formatTime } from '@/utils/time';

export default function AudioPlayer({
    title,
    url,
    isMinTrack,
    isMaxTrack,
    onPlayPause,
    onNext,
    onPrevious,
    onSeek
}) {
    const [isPlayable, setIsPlayable] = useState(true);
    const [wasPlaying, setWasPlaying] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(null);
    const [isSeeking, setIsSeeking] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.pause();
        setWasPlaying(isPlaying);
        setIsPlayable(false);
        setIsPlaying(false);
        setIsSeeking(false);
        setCurrentTime(0);
        setDuration(0);
    }, [url]);

    useEffect(() => {
        onSeek(isSeeking);
    }, [isSeeking]);

    useEffect(() => {
        if (isPlaying) audioRef.current.play();
        else audioRef.current.pause();
    }, [isPlaying]);

    const togglePlayPause = () => {
        if (!duration) setDuration(audioRef.current.duration);
        setIsPlaying(!isPlaying);
        if (onPlayPause) onPlayPause(!isPlaying);
    };

    const handleNext = () => {
        if (onNext) onNext();
    };

    const handlePrevious = () => {
        if (onPrevious) onPrevious();
    };

    const handleTimeUpdate = () => {
        if (!isSeeking) setCurrentTime(audioRef.current.currentTime);
    };

    return (
        <div className='w-full relative'>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                src={url}
                onDurationChange={() => { setDuration(audioRef.current.duration) }}
                onCanPlay={() => { 
                    setIsPlayable(true); setIsPlaying(wasPlaying); 
                }}
            />
            <ProgressBar
                playedFraction={currentTime / duration}
                onSeekStart={() => {
                    setWasPlaying(isPlaying);
                    setIsSeeking(true);
                }}
                onSeekEnd={(playedFraction) => {
                    // const newTime = playedFraction * duration;
                    // setCurrentTime(newTime);
                    audioRef.current.currentTime = currentTime;
                    setIsSeeking(false);
                }}
                onSeekChange={(playedFraction) => {
                    const newTime = playedFraction * duration;
                    setCurrentTime(newTime);
                }}
            />
            <div className="w-full items-center border-2 flex flex-row gap-2 md:px-6 py-2 px-2 md:py-4">
                <div className='flex flex-1 flex-col items-left md:flex-row md:items-center '>
                    <div className='md:w-[200px]'>
                        {title}
                    </div>


                    <div className='flex flex-1 flex-row gap-4 md:mx-auto'>
                        <button
                            onClick={handlePrevious}
                            className={`btn btn-secondary btn-tight w-[30px] h-[30px] ${isMinTrack && 'disabled'}`}
                        >
                            <MdOutlineSkipPrevious className='inline text-2xl' />
                        </button>

                        <button
                            onClick={togglePlayPause}
                            className={`btn btn-primary w-[30px] h-[30px] ${!isPlayable && 'disabled'}`}
                        >
                            {
                                isPlaying ?
                                    <FaPause className='inline' /> :
                                    <FaPlay className='inline' />
                            }
                        </button>

                        <button
                            onClick={handleNext}
                            className={`btn btn-secondary btn-tight w-[30px] h-[30px] ${isMaxTrack && 'disabled'}`}
                        >
                            <MdOutlineSkipNext className='text-2xl' />
                        </button>
                    </div>
                </div>

                    <div className='md:w-[200px] text-right'>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
            </div>
        </div>
    );
}
