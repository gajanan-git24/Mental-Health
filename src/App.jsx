import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, MessageCircle, Wind, Gamepad2, Book, User } from 'lucide-react';
import Home from './components/Home';
import Games from './games/Games';
import ColorBreath from './games/ColorBreath';

function Navigation() {
    const location = useLocation();

    const navItems = [
        { name: 'Home', icon: HomeIcon, path: '/' },
        { name: 'Chat', icon: MessageCircle, path: '/chat' },
        { name: 'Breathe', icon: Wind, path: '/breathe' },
        { name: 'Games', icon: Gamepad2, path: '/games' },
        { name: 'Journal', icon: Book, path: '/journal' },
        { name: 'Profile', icon: User, path: '/profile' }
    ];

    return (
        <header className="navbar">
            <div className="nav-brand">
                <span style={{ fontSize: '1.5rem', marginRight: '4px' }}>🧠</span>
                <span>MindMerge</span>
            </div>

            <nav className="nav-links">
                {navItems.map(item => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path || (location.pathname.startsWith('/games') && item.path === '/games') ? 'active' : ''}`}
                    >
                        <item.icon size={18} />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="nav-actions">
                <div className="guest-badge">
                    🌱 Guest
                </div>
                <button className="btn-signout">Sign Out</button>
            </div>
        </header>
    );
}

function Placeholder({ title }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
            <h2>{title} Integration</h2>
            <p>This feature is coming soon.</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/games/color-breath" element={<ColorBreath />} />
                        <Route path="/chat" element={<Placeholder title="Chat" />} />
                        <Route path="/breathe" element={<Placeholder title="Breathe" />} />
                        <Route path="/journal" element={<Placeholder title="Journal" />} />
                        <Route path="/profile" element={<Placeholder title="Profile" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
