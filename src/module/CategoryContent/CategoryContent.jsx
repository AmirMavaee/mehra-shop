import styles from "./CategoryContent.module.css";

function CategoryContent({ text, icon, active }) {
  return (
    <a href="#">
      <div
        className={`${styles.CategoryContentContainer} ${
          active ? styles.greenBorder : styles.transparentBorder
        }`}
      >
        <img src={icon} alt={text} />

        <h3 className={active ? styles.greenText : ""}>{text}</h3>
      </div>
    </a>
  );
}

export default CategoryContent;
