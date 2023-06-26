import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ setToken }) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('https://reqres.in/api/login', data);
            const token = response.data.token;
            setToken(token)
            navigate("/userdata")

            // console.log('token', token)//
        }
        catch (error) {
            alert('login failed');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <input type="submit" value="Login" />

            </form>
        </div>
    )
}
export default LoginPage;