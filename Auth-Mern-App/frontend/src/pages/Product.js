import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../utils";
import { ToastContainer } from "react-toastify";

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

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
                    "Content-Type": "application/json"
                },
            });
            setProducts(response.data);
        } catch (error) {
            handleError(error.response?.data?.message || "Failed to fetch products.");
        }
    };

    return (
        <div className="container mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            {products?.data?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.data.map((item, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="font-semibold text-gray-800 mt-2">{item.name}</h3>
                            <p className="text-gray-600">${item.price}</p>
                            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products available</p>
            )}
            <ToastContainer />
        </div>
    );
}

export default ProductPage