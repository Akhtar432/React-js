import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="flex">
    <div className="fixed top- left-0 h-full w-64 bg-gray-800 text-white overflow-y-auto">
        <div className="p-4 text-2xl font-bold border-b border-gray-600 mt-2">
        Products
        </div>
        <ul className="p-4 space-y-4">
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get all products
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get a single product
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Limit results
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Sort results
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get all categories
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get in category
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Add new product
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Update a product
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Delete a product
            </NavLink>
        </li>
        
        </ul>
        <div className="p-4 text-2xl font-bold border-b border-gray-600 mt-2">
        Cart
        </div>
        <ul className="p-4 space-y-4">
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get all
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Get a single
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Limit results
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Sort results
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            get in date range
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            get user cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Add new cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Update a cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className="block hover:bg-gray-700 p-2 rounded">
            Delete a cart
            </NavLink>
        </li>

        </ul>
    </div>

    </div>
  )
}

export default Sidebar