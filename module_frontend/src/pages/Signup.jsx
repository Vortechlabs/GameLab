import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // POST request to the register endpoint
            const response = await axios.post('http://localhost:8000/register', {
                name,
                email,
                password,
                password_confirmation
            }, {
                withCredentials: true, // Include cookies for session
            });

            if (response.status === 204) {
                // Handle success, for example, redirect to a login page
                console.log('User successfully registered');
            }
        } catch (err) {
            setError('Error during registration: ' + err.response?.data?.message || err.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
