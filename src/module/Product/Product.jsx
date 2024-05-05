import styles from "./Product.module.css";
import paper from "../../assets/paper.svg";
import productImage from "../../assets/product-image.svg";
import star from "../../assets/star.svg";
import shop from "../../assets/shop.svg";
import plus from "../../assets/pluse.svg";
function Product() {
  return (
    <div className={styles.productContainer}>
      <ul>
        <li>
          <img src={paper} alt="paper" />
        </li>
        <li>
          <img src={paper} alt="paper" />
        </li>
        <li>
          <img src={paper} alt="paper" />
        </li>
      </ul>
      <div className={styles.productImage}>
        <img src={productImage} alt="productImage" />
      </div>
      <div className={styles.productContent}>
        <h1>عنوان محصول عنوان محصول عنوان محصول عنوان محصول</h1>
        <div className={styles.point}>
          <span>
            ۴.۶
            <img src={star} alt="start" />
          </span>
          <span>
            <img src={shop} alt="shop" />
            مهراشاپ
          </span>
          <span>۴۶۰,۰۰۰</span>
        </div>
        <div className={styles.price}>
          <button>
            <img src={plus} alt="plus" />
          </button>
          <div>
            <span>۴۶۰,۰۰۰</span>
            <p>
              ۴۶۰,۰۰۰
              <span>تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
