import React, { useState } from "react";
import { Dialog } from "../components/dialog/dialog";
import { DialogTitle } from "../components/dialog/dialogTitle";
import { DialogContent } from "../components/dialog/dialogContent";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { X } from "lucide-react";

const AddProductModal = ({ onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    alert("Product added successfully!");
    onClose();
  };

  return (
    <Dialog >
      <DialogContent>
        <DialogTitle className="text-lg font-semibold">Add Product
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        </DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <Input 
            type="text" 
            name="name" 
            value={product.name} 
            onChange={handleChange} 
            placeholder="Product Name" 
            required 
          />

          {/* Price */}
          <Input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            placeholder="Price ($)" 
            required 
          />

          {/* Description */}
          <Textarea 
            name="description" 
            value={product.description} 
            onChange={handleChange} 
            placeholder="Product Description" 
            required 
          />

          {/* Image Upload */}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full">Add Product</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;