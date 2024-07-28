import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../../store';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryIdNumber = Number(categoryId);

  const products = useSelector((state: RootState) =>
    state.catalog.products.filter(product => product.category_id === categoryIdNumber)
  );

  const category = useSelector((state: RootState) =>
    state.catalog.categories.find(cat => cat.id === categoryIdNumber)
  );

  const location = useSelector((state: RootState) => state.location);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backIcon}>
          <FaArrowLeft />
        </Link>
        {category && <h1 className={styles.categoryName}>{category.name}</h1>}
        <img className={styles.logo} src={location.logo || 'default-logo.jpg'} alt="Logo" />
      </header>
      {products.length > 0 ? (
        products.map(product => (
          <div className={styles.productItem} key={product.id}>
            <img className={styles.productImage} src={product.logo || 'default-product.jpg'} alt={product.name} />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>Price: ${product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductList;
