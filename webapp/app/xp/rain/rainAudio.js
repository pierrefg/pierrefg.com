"use client";

import React, { useEffect, useRef, forwardRef } from 'react';
import * as Tone from 'tone';

const getRandomElement = (list) => list[Math.floor(Math.random() * list.length)];
const getRandomInterval = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomVelocity = (min, max) => Math.random() * (max - min) + min;

export default function RainAudio({ control }) {  // Default values for x and y
    const percSynthRef = useRef(null);
    const bassSynthRef = useRef(null);

    const bitCrusherRef = useRef(null);

    const octavesRef = useRef(["2", "3", "4", "5"]);

    const initializeSynths = () => {
        const percGain = new Tone.Gain(0.15).toDestination();
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
            volume: -20,
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
        if (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)) {
            const context = new Tone.Context({ latencyHint: "playback", lookAhead: 0.1 });
            Tone.setContext(context);
        } else {
            console.warn("AudioContext is not supported in this environment.");
        }
        
        initializeSynths();

        return () => {
            if (percSynthRef.current && !percSynthRef.current.disposed) percSynthRef.current.dispose();
            if (bassSynthRef.current && !bassSynthRef.current.disposed) bassSynthRef.current.dispose();
        };
    }, []);

    useEffect(() => {
        const harmonicity = 0.1+control.current.y*9;
        const resonance = Number.isFinite(control.current.y) ? Math.floor(1000+(1-control.current.y)*4000) : 2000;

        if (percSynthRef.current) {
            percSynthRef.current.set({ harmonicity, resonance });
        }

        bitCrusherRef.current.set({'bits': Math.floor(4+(1-control.current.x)*4)})

        octavesRef.current = Array.from({ length: Math.floor(2 + 5 * (1-control.current.y)) }, (_, index) => (
            (index + 1).toString()
        ));
    }, []);

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
            const interval = 100 + (1-control.current.x)*getRandomInterval(150, 300);
            
            transport.scheduleOnce((time) => {
                playSound(percSynth, '4n');
                schedulePercSound();
            }, `+${interval/1000}`);
        };

        const scheduleBassSound = () => {
            const interval = 100 + (1-control.current.x)*getRandomInterval(1000, 2000);
            transport.scheduleOnce((time) => {
                playSound(bassSynth, '1n');
                scheduleBassSound();
            }, `+${interval/1000}`);
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
