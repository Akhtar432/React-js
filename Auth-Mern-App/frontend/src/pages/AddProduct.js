import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function AddProduct() {
  // State to manage product data
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file input change
  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    // You can add your API call or further logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name Input */}
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              required
            />

            {/* Product Description Textarea */}
            <Textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
              required
            />

            {/* Product Price Input */}
            <Input
              type="number"
              name="price"
              placeholder="Product Price"
              value={product.price}
              onChange={handleChange}
              required
            />

            {/* Product Image Input */}
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}