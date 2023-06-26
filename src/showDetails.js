import React, { useEffect, useState } from "react";
// import { Navigate } from 'react-router-dom';
import axios from 'axios';

const UserDataPage = ({ token }) => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=2', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const userData = response.data.data;
            setUserData(userData);
            setIsLoading(false);
        } catch (error) {
            alert('Failed');
            console.error('Error:', error);
        }
    };
    fetchUserData();
},[token]);
    // if (!token) {
    //     return <Navigate to="/login" />

    // }

    return (
        <div>
            <h2>User Data</h2>
            {isLoading ? (
                <p>Loading...</p>
            ):(
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>
                                <img src={user.avatar} alt='Avatar'/>
                            </td>
                            </tr>
                    ))}
            
                    </tbody>
                </table>
          
                
            )}
            
        </div>
    )
}

export default UserDataPage