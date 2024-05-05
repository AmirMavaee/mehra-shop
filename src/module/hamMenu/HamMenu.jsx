import styles from "./hamMenu.module.css"
import shop from "../../assets/shop.svg"
function HamMenu({isOpen}) {
    return (
        <div className={`${styles.container} ${isOpen ? "" : styles.close}`}>
            <ul>
                <li><a href="#">بلاگ</a></li>
                <li><a href="#">داستان ما</a></li>
                <li><a href="#">تماس با ما</a></li>
                <li><a href="#">
                    <img src={shop} alt="shop" />
                    فروشنده شوید!</a></li>
            </ul>
        </div>
    );
}

export default HamMenu;