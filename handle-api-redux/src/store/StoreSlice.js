
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

// Fetch a single product by ID
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    return data;
  }
);

// Delete a product by ID
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    return id; // Return the deleted product's ID
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      // Handle fetch single product
    builder
    .addCase(fetchSingleProduct.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.singleProduct = action.payload;
    })
    .addCase(fetchSingleProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    //Delete product
    .addCase(deleteProduct.pending, (state) => {
      state.status = "loading";
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = state.items.filter((product) => product.id !== action.payload);
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;