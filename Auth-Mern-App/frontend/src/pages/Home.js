import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            console.error("Token is missing. Please log in.");
            handleError("Authorization token is missing.");
            return;
        }
    
        try {
            const response = await axios.get('http://localhost:8080/products', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Products:", response.data);
            setProducts(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Server responded with an error:", error.response.data);
                handleError(error.response.data.message || "Failed to fetch products.");
            } else {
                console.error("An error occurred:", error.message);
                handleError(error.message);
            }
        }
    };
    
    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout}>Logout</button>
            <div>
                {
                    products?.data?.length > 0 ? (
                        products?.data?.map((item, index) => (
                            <ul key={index}>
                                <span>{item.name} : {item.price}</span>
                            </ul>
                        ))
                    ) : (
                        <p>No products available</p>
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;