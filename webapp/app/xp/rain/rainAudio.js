"use client";

import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';

const getRandomElement = (list) => list[Math.floor(Math.random() * list.length)];
const getRandomInterval = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomVelocity = (min, max) => Math.random() * (max - min) + min;

if (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)) {
    const context = new Tone.Context({ latencyHint: "playback", lookAhead: 0.1 });
    Tone.setContext(context);
} else {
    console.warn("AudioContext is not supported in this environment.");
}

export default function RainAudio({ x = 100, y = 100 }) {  // Default values for x and y
    const percSynthRef = useRef(null);
    const bassSynthRef = useRef(null);

    const bitCrusherRef = useRef(null);

    const octavesRef = useRef(["2", "3", "4", "5"]);

    const initializeSynths = () => {
        const percGain = new Tone.Gain(0.23).toDestination();
        const bassGain = new Tone.Gain().toDestination();
    
        const percSynth = new Tone.PolySynth(Tone.MetalSynth, {
            frequency: 200,
            harmonicity: 0.1,
            modulationIndex: 32,
            resonance: 1000,
            envelope: {
                attack: 0.01,
                decay: 1,
                sustain: 0.4,
                release: 0.3
            },
            modulationEnvelope: {
                attack: 0.2,
                decay: 0.3,
                sustain: 0.1,
                release: 0.2
            },
            octaves: 2.5
        }).connect(percGain);
        percSynthRef.current = percSynth;
    
        // Create a bitcrusher effect
        const bitCrusher = new Tone.BitCrusher({
            bits: 4
        }).toDestination();
        const reverb = new Tone.Reverb({
            decay: 3,
        }).toDestination();
    
        const bassSynth = new Tone.PolySynth(Tone.MonoSynth, {
            volume: -15,
            filter: {
                Q: 5,
                type: 'lowpass',
                rolloff: -24
            },
            envelope : {
                attack : 0.9 ,
                decay : 0.1 ,
                sustain : 0.9 ,
                release : 2
            },
            filterEnvelope : {
                attack : 0.06 ,
                decay : 0.5 ,
                sustain : 0.9 ,
                release : 2 ,
                baseFrequency : 200 ,
                octaves : 2,
                exponent : 3
            } 
        }).connect(bitCrusher).connect(reverb).connect(bassGain);
        bassSynthRef.current = bassSynth;
        bitCrusherRef.current = bitCrusher;
    };    
    

    useEffect(() => {
        initializeSynths();

        return () => {
            if (percSynthRef.current && !percSynthRef.current.disposed) percSynthRef.current.dispose();
            if (bassSynthRef.current && !bassSynthRef.current.disposed) bassSynthRef.current.dispose();
        };
    }, []);

    useEffect(() => {
        const harmonicity = 0.1+x*9;
        const resonance = Number.isFinite(y) ? Math.floor(1000+(1-y)*4000) : 2000;

        if (percSynthRef.current) {
            percSynthRef.current.set({ harmonicity, resonance });
        }

        bitCrusherRef.current.set({'bits': Math.floor(4+(1-x)*4)})

        octavesRef.current = Array.from({ length: Math.floor(2 + 5 * (1-y)) }, (_, index) => (
            (index + 1).toString()
        ));
    }, [x, y]);

    const playSound = (synth, noteLength) => {
        if (synth && !synth.disposed) {
            const note = `${getRandomElement(["C", "E", "G", "D", "F#"])}${getRandomElement(octavesRef.current)}`;
            const velocity = getRandomVelocity(0.2, 1);
            synth.triggerAttackRelease(note, noteLength, undefined, velocity);
        }
    };

    useEffect(() => {
        const percSynth = percSynthRef.current;
        const bassSynth = bassSynthRef.current;
        const transport = Tone.getTransport();

        const schedulePercSound = () => {
            const interval = getRandomInterval(200, 500) / 1000;
            transport.scheduleOnce((time) => {
                playSound(percSynth, '4n');
                schedulePercSound();
            }, `+${interval}`);
        };

        const scheduleBassSound = () => {
            const interval = getRandomInterval(500, 1500) / 1000;
            transport.scheduleOnce((time) => {
                playSound(bassSynth, '1n');
                scheduleBassSound();
            }, `+${interval}`);
        };

        schedulePercSound();
        scheduleBassSound();
        transport.start();

        return () => {
            transport.cancel();
            transport.stop();
        };
    }, []);

    return null;
}
