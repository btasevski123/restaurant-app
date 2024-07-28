import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import styles from './LocationDetails.module.scss';

const LocationDetails: React.FC = () => {
  const location = useSelector((state: RootState) => state.location);
  const categories = useSelector((state: RootState) => state.catalog.categories);

  const handleCall = () => {
    window.location.href = `tel:${location.phone}`;
  };

  const handleFindLocation = () => {
    window.open(`https://www.google.com/maps?q=41°23'05.9"N 2°11'46.6"E`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: location.name,
        text: location.description,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  const handleMessage = () => {
    window.location.href = `mailto:${location.email}`;
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={location.cover || 'default-cover.jpg'} alt="Cover" />
      <img className={styles.logo} src={location.logo || 'default-logo.jpg'} alt="Logo" />
      <div className={styles.title}>
        <h1>{location.name}</h1>
        <p className={location.active ? styles.open : styles.closed}>
          {location.active ? 'Open now' : 'Closed'}
        </p>
      </div>
      <p className={styles.description}>{location.description}</p>
      <div className={styles.iconContainer}>
        <FaPhone className={styles.icon} onClick={handleCall} />
        <FaMapMarkerAlt className={styles.icon} onClick={handleFindLocation} />
        <FaShareAlt className={styles.icon} onClick={handleShare} />
        <FaEnvelope className={styles.icon} onClick={handleMessage} />
      </div>
      <div className={styles.menuSection}>
        <h2>Menu</h2>
        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id} style={{ textDecoration: 'none' }}>
              <div className={styles.categoryItem}>
                <img className={styles.categoryImage} src={category.logo || 'default-category.jpg'} alt={category.name} />
                <div className={styles.categoryName}>
                  <h3>{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
