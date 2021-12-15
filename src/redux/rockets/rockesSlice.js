import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchAllRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const usefullData = response.data.map((rocketdata) => ({
    id: rocketdata.rocket_id,
    name: rocketdata.rocket_name,
    images: rocketdata.flickr_images,
    description: rocketdata.description,
    reserved: 'false',
  }));
  return usefullData;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    reserve: (state, action) => {
      const rocketToReserve = state.entities.find((rockets) => rockets.id === action.payload);
      if (rocketToReserve.reserved === 'true') {
        rocketToReserve.reserved = 'false';
      } else {
        rocketToReserve.reserved = 'true';
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const newState = state;
        newState.loading = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newState = state;
        newState.entities = [...action.payload];
        newState.loading = 'idle';
      });
  },
});

export const { reserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
