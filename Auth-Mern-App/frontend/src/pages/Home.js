import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function Home() {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [products, setProducts] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem("loggedInUser"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        handleSuccess("User Logged out");

        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    const fetchProducts = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            handleError("Authorization token is missing.");
            return;
        }

        try {
            const response = await axios.get("http://localhost:8080/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProducts(response.data);
        } catch (error) {
            handleError(error.response?.data?.message || "Failed to fetch products.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const categorySubCategories = {
        Men: ["Shirts", "Jeans", "Jackets"],
        Women: ["Tops", "Dresses", "Skirts"],
        Kids: ["Toys", "Clothing", "Footwear"],
    };

    return (
        <div className="min-h-screen bg-gray-700">
            {/* Navbar */}
            <div className="bg-blue-600 p-4 shadow-md flex justify-between items-center">
                <div className="text-white mx-10">
                    <ul className="hidden md:flex space-x-10 mx-10">
                        {Object.keys(categorySubCategories).map((category) => (
                            <li
                                key={category}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(category)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a
                                    href="/"
                                    className="text-white font-bold text-xl hover:border-b-4 hover:border-red-700"
                                >
                                    {category}
                                </a>

                                {openDropdown === category && (
                                    <ul className="absolute my-2 bg-white text-black shadow-md rounded-md">
                                        {categorySubCategories[category].map((subCategory) => (
                                            <li key={subCategory} className="px-4 py-2 hover:bg-gray-200 rounded-md">
                                                <a href="/">{subCategory}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white text-2xl font-bold">
                    Welcome, {loggedInUser}
                    <button
                        onClick={handleLogout}
                        className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Products Section */}
            <div className="container mx-auto mt-2 p-6 bg-white shadow-lg rounded-lg">
                {products?.data?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.data.map((item, index) => (
                            <div
                                key={index}
                                className="border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"
                            >
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No products available</p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
}

export default Home;
