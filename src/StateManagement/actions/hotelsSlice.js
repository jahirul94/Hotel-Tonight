import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
    const res = await axios.get("hotels.json")
    return res.data
})

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        isLoading: false,
        hotels: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHotels.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHotels.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hotels = action.payload
            state.error = null
        });
        builder.addCase(fetchHotels.rejected, (state, action) => {
            state.isLoading = false;
            state.hotels = []
            state.error = action.error.message;
        });

    }
})

export default hotelsSlice.reducer;
