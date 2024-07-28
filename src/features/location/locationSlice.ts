// src/features/location/locationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  id: number;
  name: string;
  logo: string | null;
  cover: string | null;
  description: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  category_id: number;
  catalog_ids: number[];
  phone: number;
  email: string;
}

const initialState: LocationState = {
  id: 0,
  name: '',
  logo: null,
  cover: null,
  description: '',
  active: false,
  created_at: '',
  updated_at: '',
  category_id: 0,
  catalog_ids: [],
  phone: 0,
  email: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      return action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
