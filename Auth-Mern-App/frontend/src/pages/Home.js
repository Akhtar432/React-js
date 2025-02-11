import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import AddProductModal from "../modal/AddProductModal"; // Import your modal
import ProductPage from "./Product";

function Home() {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility
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

    const categorySubCategories = {
        Men: ["Shirts", "Jeans", "Jackets"],
        Women: ["Tops", "Dresses", "Skirts"],
        Kids: ["Toys", "Clothing", "Footwear"],
    };

    // Function to open the modal
    const handleAddProductClick = () => {
        setIsModalOpen(true); // Open modal
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
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
            <ProductPage/>
            <ToastContainer />
            {/* Add Product Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleAddProductClick}
                    className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
                >
                    + Add Product
                </button>
            </div>

            {/* Add Product Modal */}
            {isModalOpen && <AddProductModal onClose={handleCloseModal} />}
        </div>
    );
}

export default Home;
