import React, { useState } from 'react';
import './PasswordInput.css';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="password-container">
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
           
            
                <b
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                >
                    {isPasswordVisible ? '🙈' : '👁️'}
                </b>
            
        </div>
    );
};

export default PasswordInput;
