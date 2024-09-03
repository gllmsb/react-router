import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import styles from './FeaturedProducts.module.scss';

export const FeaturedProducts = () => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'A beautiful plant that brightens up any room.',
        price: '209.50kr',
        img: product1, 
        alt: 'Product 1',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'An elegant addition to your garden collection.',
        price: '299.99kr',
        img: product2,
        alt: 'Product 2',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Perfect for indoor or outdoor spaces.',
        price: '149.99kr',
        img: product3, 
        alt: 'Product 3',
      },
    ];
  
    return (
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productList}>
          {products.map(product => (
            <div key={product.id} className={`${styles.productCard} ${product.id === 2 ? styles.lowerDescription : ''} ${product.id === 3 ? styles.lowerDescription : ''}`}>
              <img src={product.img} alt={product.alt} className={styles.productImage} />
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceContainer}>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};