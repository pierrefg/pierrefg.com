"use client";

import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

const getRandomElement = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};

const getRandomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomVelocity = (min, max) => {
    return Math.random() * (max - min) + min;
};

export default function RainAudio() {
    const [percSynth, setPercSynth] = useState(null);
    const [bassSynth, setBassSynth] = useState(null);

    useEffect(() => {
        const percGain = new Tone.Gain(0.2).toDestination();
        const percSynthInstance = new Tone.PolySynth(Tone.MetalSynth).connect(percGain);
        setPercSynth(percSynthInstance);

        return () => {
            percSynthInstance.dispose();
            percGain.dispose();
        };
    }, []);

    useEffect(() => {
        const bassGain = new Tone.Gain().toDestination();
        const bassSynthInstance = new Tone.PolySynth(Tone.MonoSynth, {
            volume: -10,
            envelope: {
                attack: 0.5,    // Slow attack for a smoother fade-in
                decay: 1,       // Longer decay for a gradual drop in volume
                sustain: 0.7,   // Sustain level after decay
                release: 10      // Long release for a gradual fade-out
            }
        }).connect(bassGain);
        setBassSynth(bassSynthInstance);

        return () => {
            bassSynthInstance.dispose();
            bassGain.dispose();
        };
    }, []);

    const playSound = (synth, noteLength) => {
        if (synth) {
            const note = getRandomElement(["C", "E", "G", "D", "F#"]) + getRandomElement(["2", "3", "4", "5"]);
            const velocity = getRandomVelocity(0.2, 1);
            synth.triggerAttackRelease(note, noteLength, undefined, velocity);
        }
    };

    useEffect(() => {
        let percInterval;
        let bassInterval;

        const playRandomly = (it_min, it_max, synth, noteLength, setIntervalRef) => {
            const randomDelay = getRandomInterval(it_min, it_max);
            setIntervalRef(setTimeout(() => {
                playSound(synth, noteLength);
                playRandomly(it_min, it_max, synth, noteLength, setIntervalRef); // Recursive call with random interval
            }, randomDelay));
        };

        if (percSynth) {
            playRandomly(50, 200, percSynth, '8n', (interval) => (percInterval = interval));
        }

        if (bassSynth) {
            playRandomly(500, 1000, bassSynth, '1n', (interval) => (bassInterval = interval));
        }

        return () => {
            clearTimeout(percInterval);
            clearTimeout(bassInterval);
        };
    }, [percSynth, bassSynth]);

    return null;
}
