import { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    if (product.image) {
      formData.append("image", product.image);
    }

    try {
      const response = await axios.post("http://localhost:8080/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Product added successfully:", response.data);
      setProduct({ name: "", price: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              required
            />
            <Textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="price"
              placeholder="Product Price"
              value={product.price}
              onChange={handleChange}
              required
            />
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Adding..." : "Add Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
