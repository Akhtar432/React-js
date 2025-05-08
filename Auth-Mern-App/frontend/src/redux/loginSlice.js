import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for login
export const loginUser = createAsyncThunk("auth/login", async (loginInfo, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginInfo),
        });
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || "Login failed");
        }
        
        localStorage.setItem("token", result.jwtToken);
        localStorage.setItem("loggedInUser", result.name);
        
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const loginSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("token") || null,
        status: "idle", // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("loggedInUser");
            state.user = null;
            state.token = null;
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload.name;
                state.token = action.payload.jwtToken;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
