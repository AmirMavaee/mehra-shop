import styles from "./CategoryPage.module.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import woman from "../../assets/woman.png";
import leftArrow from "../../assets/leftArrowWhite.svg";
import prevbtn from "../../assets/prevbtn.svg";
import nextbtn from "../../assets/nextbtn.svg";
import tag from "../../assets/tag.svg";
import CategoryContent from "../../module/CategoryContent/CategoryContent";

function CategoryPage() {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryContent}>
        <div>
          <CategoryContent text="مد و فشن" icon={icon1} active={true} />
          <CategoryContent text="زیبایی و سلامت" icon={icon2} active={false} />
        </div>
        <div>
          <CategoryContent text="لوازم خانه" icon={icon3} active={false} />
          <CategoryContent text="ورزش و سفر" icon={icon4} active={false} />
        </div>
        <a href="#">
          مشاهده همه محصولات
          <img src={leftArrow} alt="Left Arrow" />
        </a>
      </div>

      <div className={styles.categoryImage}>
        <img src={woman} alt="woman" />
        <img src={prevbtn} alt="prev Button" />
        <img src={nextbtn} alt="next Button" />
        <img src={tag} alt="tag" />
        <img src={tag} alt="tag" />
        <img src={tag} alt="tag" />
        <img src={tag} alt="tag" />
      </div>
    </div>
  );
}

export default CategoryPage;
