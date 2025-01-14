import React from 'react';
import axios from 'axios';

const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://your-laravel-api.com/logout', {}, {
                withCredentials: true, // To send cookies (session cookies) with requests
            });

            if (response.status === 204) {
                onLogout(); // Call the onLogout function to update the UI
            }
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <div>
            <h2>You are logged in!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
