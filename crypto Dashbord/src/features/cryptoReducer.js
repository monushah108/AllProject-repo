import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCrypto = createAsyncThunk("crypto/fetchCrypto", async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=1h,24h,7d",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-snqgAuAAvdECps1eEANkGThU",
      },
    }
  );
  const data = await res.json();
  return data;
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    list: [],
    loading: false,
    error: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCrypto.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectCrypto = (state) => state.crypto.list;
export const selectLoading = (state) => state.crypto.loading;
export const selectError = (state) => state.crypto.error;

export default cryptoSlice.reducer;
