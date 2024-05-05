import styles from "./navBar.module.css";
import Home from "../../assets/Home.svg";
import HomeActive from "../../assets/HomeActive.svg";
import Category from "../../assets/Category.svg";
import CategoryActive from "../../assets/CategoryActive.svg";
import shopcart from "../../assets/shopCart.svg";
import shopActive from "../../assets/shopActive.svg";
import profile from "../../assets/Profile.svg";
import profileActive from "../../assets/ProfileActive.svg";
import { useState } from "react";
function NavBar() {
  const [clickItem, setClickItem] = useState(0);

  const clickHandler = (index) => {
    setClickItem(index);
  };

  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li onClick={() => clickHandler(0)}>
          <a href="#">
            <img src={clickItem === 0 ? HomeActive : Home} alt="Home" />
            <div className={clickItem === 0 ? styles.greenColor : styles.grayColor}>
              خانه
            </div>
          </a>
        </li>
        <li onClick={() => clickHandler(1)}>
          <a href="#">
            <img src={clickItem === 1 ? CategoryActive : Category} alt="Category" />
            <div className={clickItem === 1 ? styles.greenColor : styles.grayColor}>
              دسته بندی ها
            </div>
          </a>
        </li>
        <li onClick={() => clickHandler(2)}>
          <a href="#">
            <img src={clickItem === 2 ? shopActive : shopcart} alt="shop" />
            <div className={clickItem === 2 ? styles.greenColor : styles.grayColor}>
              سبد خرید
            </div>
          </a>
        </li>
        <li onClick={() => clickHandler(3)}>
          <a href="#">
            <img src={clickItem === 3 ? profileActive : profile} alt="profile" />
            <div className={clickItem === 3 ? styles.greenColor : styles.grayColor}>
              پروفایل
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
