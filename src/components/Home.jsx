import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, MessageCircle, Wind, Gamepad2, Book } from 'lucide-react';

export default function Home() {
    return (
        <div className="home-container">
            <header className="hero-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        Good evening, <span style={{ color: '#8b5cf6' }}>Guest</span> <span style={{ fontSize: '2.5rem' }}>🌱</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        How are you feeling today? Your wellbeing matters to us. 💙
                    </p>
                </div>

                <div className="glass-panel" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '300px' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '50%', color: '#3b82f6' }}>
                        <Droplet size={24} />
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                        Staying hydrated helps regulate your mood and energy.
                    </p>
                </div>
            </header>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Today's Mood Check-In</h2>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>How are you feeling right now?</p>
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '3rem', cursor: 'pointer' }}>
                        <span className="mood-emoji" style={{ transition: 'transform 0.2s' }}>😔</span>
                        <span className="mood-emoji" style={{ transition: 'transform 0.2s' }}>😕</span>
                        <span className="mood-emoji" style={{ transition: 'transform 0.2s' }}>😐</span>
                        <span className="mood-emoji" style={{ transition: 'transform 0.2s' }}>🙂</span>
                        <span className="mood-emoji" style={{ transition: 'transform 0.2s' }}>😄</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>What would help right now?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>

                    <Link to="/chat" className="glass-panel action-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                                <span role="img" aria-label="chat" style={{ fontSize: '1.5rem' }}>💭</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Talk to MindBot</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Share what's on your mind</p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>→</span>
                    </Link>

                    <Link to="/breathe" className="glass-panel action-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: '#38bdf8' }}>
                                <span role="img" aria-label="breathe" style={{ fontSize: '1.5rem' }}>🌬️</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Box Breathing</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>4-4-4-4 calming technique</p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>→</span>
                    </Link>

                    <Link to="/games" className="glass-panel action-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: '#a78bfa' }}>
                                <span role="img" aria-label="game" style={{ fontSize: '1.5rem' }}>🎮</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Relax & Play</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Fun distraction activities</p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>→</span>
                    </Link>

                    <Link to="/journal" className="glass-panel action-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(232, 121, 249, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: '#e879f9' }}>
                                <span role="img" aria-label="journal" style={{ fontSize: '1.5rem' }}>📓</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Daily Journal</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Reflect on your feelings</p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>→</span>
                    </Link>

                </div>
            </section>

            <style>{`
        .action-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.06); }
        .mood-emoji:hover { transform: scale(1.2); }
      `}</style>
        </div>
    );
}
