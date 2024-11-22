
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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };