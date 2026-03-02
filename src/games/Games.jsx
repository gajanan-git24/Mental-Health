import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

export default function Games() {
    return (
        <div className="games-container">
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Games & Activities</h1>
                <p style={{ color: 'var(--text-muted)' }}>Take a break, relax your mind, and have some fun.</p>
            </header>

            <div className="games-grid">
                <div className="glass-panel game-card">
                    <div className="game-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                        <span role="img" aria-label="bubbles">🫧</span>
                    </div>
                    <h3>Bubble Pop</h3>
                    <p>A calming game to pop bubbles.</p>
                    <button className="btn-play">Play Now</button>
                </div>

                <div className="glass-panel game-card">
                    <div className="game-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                        <span role="img" aria-label="cards">🃏</span>
                    </div>
                    <h3>Memory Match</h3>
                    <p>A nature-themed card matching game.</p>
                    <button className="btn-play">Play Now</button>
                </div>

                <div className="glass-panel game-card highlighted-game">
                    <div className="game-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
                        <span role="img" aria-label="breathe">🪷</span>
                    </div>
                    <h3>Color Breath</h3>
                    <p>A mindful breathing game to relax and center yourself.</p>
                    <Link to="/games/color-breath" className="btn-play primary">Play Now</Link>
                </div>
            </div>
        </div>
    );
}
