import leftArrow from "../../assets/leftArrow.svg"
import leftArrowGray from "../../assets/leftArrowGray.svg"
import styles from "./HeaderFooterMain.module.css"
function HeaderFooterMain() {
  return (
    <div>
      <ul>
        <li className={styles.active}>
          <a href="#">پرفروش ترین ها</a>
        </li>
        <li>
          <a href="#">جدید ترین ها</a>
        </li>
        <li>
          <a href="#">محبوب ترین ها</a>
        </li>
      </ul>
      <button>
        مشاهده همه
        <img className={styles.arrow_desktop} src={leftArrow} alt="left Arrow" />
        <img className={styles.arrow_mobile} src={leftArrowGray} alt="left Arrow" />
      </button>
    </div>
  );
}

export default HeaderFooterMain;
