import React, { useState } from "react";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab

  const tabs = ["Get All Products", "Get Single Product"]; // Define tab titles

  // Define tab content components
  const tabContents = [
    <ProductList />, // For "Get All Products"
    <SingleProduct/> // For Get A Single Product.
  ];

  return (
    <div className="w-full mt-10">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === index
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-gray-100 rounded-b-md">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;