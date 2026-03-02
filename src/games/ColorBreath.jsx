import React, { useState, useEffect } from 'react';
import './Games.css';

export default function ColorBreath() {
    const [isBreathing, setIsBreathing] = useState(false);
    const [phase, setPhase] = useState('Ready'); // Ready, Inhale, Hold, Exhale

    useEffect(() => {
        if (!isBreathing) return;

        let timeoutId;

        const breathCycle = () => {
            setPhase('Inhale');
            timeoutId = setTimeout(() => {
                setPhase('Exhale');
                timeoutId = setTimeout(() => {
                    breathCycle();
                }, 4000);
            }, 4000);
        };

        breathCycle();

        return () => clearTimeout(timeoutId);
    }, [isBreathing]);

    return (
        <div className="color-breath-container">
            <div className="breath-header">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Color Breath</h1>
                <p style={{ color: 'var(--text-muted)' }}>Follow the circle. Breathe in as it expands, breathe out as it shrinks.</p>
            </div>

            <div className="breath-playground">
                <div className={`breath-circle ${isBreathing ? 'animating ' + phase.toLowerCase() : ''}`}>
                    <div className="breath-text">{phase}</div>
                </div>
            </div>

            <div className="breath-controls">
                <button
                    className="btn-start-breath"
                    onClick={() => {
                        setIsBreathing(!isBreathing);
                        if (isBreathing) setPhase('Ready');
                    }}
                >
                    {isBreathing ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
}
