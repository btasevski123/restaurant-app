import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  logo: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
  category_id: number;
  catalog_id: number;
}

interface Category {
  id: number;
  name: string;
 logo: string;
}

export interface CatalogState {
  categories: Category[];
  products: Product[];
}

const initialState: CatalogState = {
  categories: [],
  products: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setCategories, setProducts } = catalogSlice.actions;
export default catalogSlice.reducer;