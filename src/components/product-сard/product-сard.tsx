import { IProduct } from "../content/content";
import styles from "./product-сard.module.css"




function ProductCard({ product }:IProduct) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardTop}>
        <img className={styles.productImg} src={product.image} alt="product-image" />
      </div>
      <div className={styles.productCardBottom}>
        <span className={styles.productTitle}>{product.title}</span>
        <span className={styles.productWeight}>{`Вес:${product.weight}г`}</span>
        <p className={styles.description}>{product.description}</p>
        <span className={styles.productPrice}>{`${product.price} ₽`}</span>
        <button className={styles.productBtnToBasket}>В корзину<img
          src="../../src/assets/icons/icon-buy.svg" alt="basket-buy" /></button>
      </div>

    </div>
  )
}

export default ProductCard;