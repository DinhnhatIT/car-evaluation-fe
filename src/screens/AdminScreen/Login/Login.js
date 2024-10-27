import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const AdminLogin = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                userName,
                password
            });

            if (response.data.result.data === "admin") {
                navigate('/admin/car-list');
            }
            setErrorMessage('');
            
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="container" style={{ marginTop: "50px"}}>
            <h2 className="text-center">Admin Login</h2>
            <form onSubmit={handleLogin} className="p-3" style={{ backgroundColor: "#f8f9fa", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
                <div className="mb-3 d-flex justify-content-between align-items-center" style={{ padding: "10px" }}>
                    {/* Username Field */}
                    <label className="text-black" style={{ width: "30%" }}>Username:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: "60%" }}
                    />
                </div>
                
                <div className="mb-3 d-flex justify-content-between align-items-center" style={{padding: "10px" }}>
                    {/* Password Field */}
                    <label className="text-black" style={{ width: "30%" }}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "60%" }}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>Login</button>
                </div>

                {/* Error Message */}
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
