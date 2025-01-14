import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Logout from './Logout';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status when the component mounts
    useEffect(() => {
        // Check if the user is authenticated
        const checkAuthentication = async () => {
            try {
                const response = await axios.get('http://localhost:8000/user', {
                    withCredentials: true, // Send cookies (session cookies)
                });

                if (response.status === 200) {
                    setIsAuthenticated(true); // User is authenticated
                }
            } catch (err) {
                setIsAuthenticated(false); // User is not authenticated
            }
        };

        checkAuthentication();
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            <h1>React Authentication</h1>
            {isAuthenticated ? (
                <Logout onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
