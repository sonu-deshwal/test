import React, { useState } from "react";
import axios from 'axios';


const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisteration = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('https://reqres.in/api/register', data)
            if (response.data.id) {
                alert('Registration successful');
            }
            else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('An error during registration');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleRegisteration}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <input type="submit" value="Register" />

            </form>
        </div>

    )
};
export default RegistrationPage;