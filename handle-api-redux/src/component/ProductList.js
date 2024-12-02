import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/StoreSlice";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // Fetch products on component mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Handle delete product
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  // Handle share product
  const handleShare = (product) => {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title}\nPrice: $${product.price}\nDescription: ${product.description}`,
      url: `https://fakestoreapi.com/products/${product.id}`, // Example product URL
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Product shared successfully"))
        .catch((error) => console.error("Error sharing product:", error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard
        .writeText(shareData.text + "\n" + shareData.url)
        .then(() => alert("Product link copied to clipboard"))
        .catch((error) => console.error("Error copying product link:", error));
    }
  };

  // Show loading or error states
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <p>Price: ${product.price}</p>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="text-red-800"
                size="small"
                onClick={() => handleDelete(product.id)}
              >
                Delete Product
              </Button>
              <Button
                className="text-blue-800"
                size="small"
                onClick={() => handleShare(product)}
              >
                Share Product
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;