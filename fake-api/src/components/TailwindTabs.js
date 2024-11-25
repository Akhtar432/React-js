import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const LeftSideTabs = () => {
  const [data, setData] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null); // State for single product
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false); // For "Get All Products"
  const [showSingleProduct, setShowSingleProduct] = useState(false); // For "Get Single Product"
  const [activeTab, setActiveTab] = useState(0);
  const [newProduct, setNewProduct] = useState(null); // State for new product response

  // Function to fetch all products
  const handleGetAllProducts = async () => {
    if (showData) {
      setShowData(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      setData(products);
      setShowData(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch a single product
  const handleGetSingleProduct = async () => {
    if (showSingleProduct) {
      setShowSingleProduct(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const product = await response.json();
      setSingleProduct(product);
      setShowSingleProduct(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to add a new product
  const handleAddNewProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newProduct = await response.json();
      setNewProduct(newProduct); // Update state with the added product response
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to update product using PUT
  const handleUpdateProductPut = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products/7', {
        method: 'PUT',
        body: JSON.stringify({
          title: 'Updated Product (PUT)',
          price: 25.0,
          description: 'Updated using PUT',
          image: 'https://i.pravatar.cc',
          category: 'electronics',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedProduct = await response.json();
      console.log('Updated Product (PUT):', updatedProduct); // Log the updated product
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a product
  const handleDeleteProduct = async () => {
    const userConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (userConfirmed) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/products/6', {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Deleted Product:', result); // Log the deleted product response
        alert('Product deleted successfully!'); // Success message
      } catch (err) {
        setError(err.message);
        alert(`Error: ${err.message}`); // Error message
      } finally {
        setLoading(false);
      }
    } else {
      alert('Product deletion cancelled.');
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="w-full flex p-4 h-screen">
      {/* Tabs (Left-Side) */}
      <Box className="w-1/4 bg-gray-100 rounded-l-md shadow-md">
        <h1 className="flex justify-center text-2xl font-bold p-4 text-gray-800">Products</h1>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          orientation="vertical"
          TabIndicatorProps={{
            style: { backgroundColor: '#4F46E5', width: '4px' },
          }}
          className="h-full"
        >
          <Tab label="Get all products" className="text-gray-600 hover:text-indigo-600 focus:text-indigo-600" />
          <Tab label="Get a single product" className="text-gray-600 hover:text-indigo-600 focus:text-indigo-600" />
          <Tab label="Add new product" className="text-gray-600 hover:text-indigo-600 focus:text-indigo-600" />
          <Tab label="Update a product" className="text-gray-600 hover:text-indigo-600 focus:text-indigo-600" />
          <Tab label="Delete a product" className="text-gray-600 hover:text-indigo-600 focus:text-indigo-600" />
        </Tabs>
      </Box>

      {/* Tab Content (Right-Side) */}
      <Box className="w-3/4 bg-white ">
        {/* Tab 1: Get All Products */}
        {activeTab === 0 && (
          <div className="text-gray-800 flex items-center flex-col">
            <h1 className="text-lg font-bold">Get all products</h1>
            <div className="p-4">
              <button
                onClick={handleGetAllProducts}
                className="bg-white border border-gray-500 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300"
              >
                {showData ? 'Hide Output' : 'Show Output'}
              </button>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
              {showData && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                  {data.map((product) => (
                    <Card key={product.id} sx={{ maxWidth: 345 }}> {/* Added key prop */}
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
                          <p>Prize${product.price}</p>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {product.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={handleDeleteProduct} className="text-red-800" size="small">
                          Delete Product
                        </Button>
                        <Button onClick={handleUpdateProductPut} className="text-red-800" size="small">
                          Update Product
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
         {/* Tab 2: Get a Single Product */}
         {activeTab === 1 && (
          <div className="text-gray-800 flex flex-col items-center">
            <h1 className="text-lg font-bold">Get a single product</h1>
            <div className="p-4">
              <button
                onClick={handleGetSingleProduct}
                className="bg-white border border-gray-500 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300"
              >
                {showSingleProduct ? 'Hide Output' : 'Show Output'}
              </button>
              <div></div>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
              {showSingleProduct && singleProduct && (
                <div>
                  <Card key={singleProduct.id} sx={{ maxWidth: 345 }}> {/* Added key prop */}
                      <CardMedia
                        sx={{ height: 140 }}
                        image={singleProduct.image}
                        title={singleProduct.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <h2>{singleProduct.title}</h2>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {singleProduct.price}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {singleProduct.description}
                        </Typography>
                      </CardContent>
                    </Card>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Add new product */}
        {activeTab === 2 && (
          <div className="text-gray-800 flex flex-col items-center">
            <h1 className="text-lg font-bold">Add new product</h1>
            <div className="p-4">
              <button onClick={handleAddNewProduct} className="bg-white border border-gray-500 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300">
                Add New Product
              </button>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
              {newProduct && (
                <div className="mt-4">
                  <h2>Product Added:</h2>
                  <p><strong>Title:</strong> {newProduct.title}</p>
                  <p><strong>Price:</strong> ${newProduct.price}</p>
                  <p><strong>Description:</strong> {newProduct.description}</p>
                  <p><strong>Category:</strong> {newProduct.category}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Update a product */}
        {activeTab === 3 && (
          <div className="text-gray-800 flex flex-col items-center">
            <h1 className="text-lg font-bold">Update a product</h1>
            <div className="p-4">
              <button onClick={handleUpdateProductPut} className="bg-white border border-gray-500 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300">
                Update Product
              </button>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
            </div>
          </div>
        )}

        {/* Tab 5: Delete a product */}
        {activeTab === 4 && (
          <div className="text-gray-800 flex flex-col items-center">
            <h1 className="text-lg font-bold">Delete a product</h1>
            <div className="p-4">
              <button onClick={handleDeleteProduct} className="bg-white border border-gray-500 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300">
                Delete Product
              </button>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-600">Error: {error}</p>}
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default LeftSideTabs;