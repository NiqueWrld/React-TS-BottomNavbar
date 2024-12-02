import { useState } from 'react';
import './BottomNavStyles.css'; // Make sure your styles are in this file
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import Card from '../../pages/Card';
import Events from '../../pages/Events';
import Settings from '../../pages/Settings';

// Import components for different views

function BottomNav() {
    // State to track the active view
    const [activeView, setActiveView] = useState<string>('Card'); // Default to the "code" view

    // Function to handle the click event and set the active view
    const handleNavClick = (view: string) => {
        setActiveView(view);
    };

    // Conditionally render components based on the active view
    const renderActiveView = () => {
        switch (activeView) {
            case 'Home':
                return <Home />;
            case 'Profile':
                return <Profile />;
            case 'Card':
                return <Card />;
            case 'Events':
                return <Events />;
            case 'Settings':
                return <Settings />;
            default:
                return <Card />; // Default to "code" view
        }
    };

    return (
        <>
            {/* Render the active view */}
            <div className="active-view-container">{renderActiveView()}</div>

            {/* Bottom Navigation */}
            <ul className="bottom-nav">
                <div className="slider"></div>
                <li>
                    <a
                        href="#"
                        className={activeView === 'Home' ? 'active-icon' : ''}
                        onClick={() => handleNavClick('Home')}
                    >
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeView === 'profile' ? 'active-icon' : ''}
                        onClick={() => handleNavClick('profile')}
                    >
                        <i className="far fa-user"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeView === 'Card' ? 'active-icon' : ''}
                        onClick={() => handleNavClick('Card')}
                    >
                        <i className="fas fa-credit-card"></i>
                        <span>Card</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeView === 'Events' ? 'active-icon' : ''}
                        onClick={() => handleNavClick('Events')}
                    >
                        <i className="far fa-newspaper"></i>
                        <span>Events</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeView === 'Settings' ? 'active-icon' : ''}
                        onClick={() => handleNavClick('Settings')}
                    >
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default BottomNav;
