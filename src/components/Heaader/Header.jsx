import React from "react";
import NavBar from "../../module/navBar/NavBar";
import HamMenu from "../../module/hamMenu/HamMenu";
import styles from "./Header.module.css";
import logo from "../../assets/mehrashop-logo.svg";
import person from "../../assets/Vector.svg";
import heart from "../../assets/Vector1.svg";
import cart from "../../assets/Vector2.svg";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import { useState } from "react";

function Header() {
  const [isOpen , setIsOpen] = useState(false);


  console.log(isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.menus_responsive}>
        <a href="#" onClick={()=>setIsOpen(true)}>
          <img src={menu} alt="menu" />
        </a>
        <a href="#">
          <img src={search} alt="search" />
        </a>
      </div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.menu_list_container}>
        <ul className={styles.menu_list}>
          <li>
            <a href="#" className={styles.active}>
              خانه
            </a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">داستان ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </div>
      <div className={styles.menu_list_icon_container}>
        <ul className={styles.menu_list_icons}>
          <li>
            <a href="#">
              <img src={person} alt="person" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={heart} alt="heart" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cart} alt="cart" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.hamMenu} >
        <div className={isOpen ? styles.show : styles.hide} onClick={()=>setIsOpen(false)}></div>
        <HamMenu isOpen={isOpen}/>
      </div>
      <div className={styles.navBar}>
        <NavBar/>
      </div>
    </header>
  );
}

export default Header;
