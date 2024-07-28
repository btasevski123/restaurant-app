// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from './features/location/locationSlice';
import { setCategories, setProducts } from './features/catalog/catalogSlice';
import { locationData, categoriesData, productsData } from './data/mockData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationDetails from '../src/components/LocationDetails/LocationDetails';
import ProductList from '../src/components/ProductList/ProductList';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(locationData));
    dispatch(setCategories(categoriesData));
    dispatch(setProducts(productsData));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LocationDetails />} />
        <Route path="/category/:categoryId" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
