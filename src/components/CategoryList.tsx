import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const CategoryList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.catalog.categories);

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <img src={category.logo || 'default-category.jpg'} alt={category.name} />
          <h2>{category.name}</h2>
          <Link to={`/category/${category.id}`}>View Products</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
