import styles from "./HomeMainPage.module.css";
import Product from "../../module/Product/Product";
import HeaderFooterMain from "../../module/HeaderFooterMain/HeaderFooterMain";
import CategoryPage from "../CategoryPage/CategoryPage";
function HomeMainPage() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <div className={styles.header_main}>
            <HeaderFooterMain />
          </div>
          <div className={styles.product}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className={styles.footer_main}>
            <HeaderFooterMain />
          </div>
        </div>
      </div>

      <div className={styles.menu_responsive}>
        <CategoryPage />
      </div>
    </main>
  );
}

export default HomeMainPage;
