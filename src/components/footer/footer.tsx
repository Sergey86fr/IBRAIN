
import styles from "./footer.module.css"


function Footer() {
    return (
        <div>
        <button></button>
        <div>
            <h2 className={styles.title}>IBRAIN</h2>
            <span>© ООО СК «АПШЕРОН» 
            Все права защищены. 2010-2020</span>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Карта сайта</a>
            <a href="#">Политика конфиденциальности</a>
        </div>
        <ul className={styles.footerMenu}>
                    <li className={styles.footerItem}>
                        <a href="" className="footer__link">
                            О ресторане
                        </a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#" className="footer__link">
                            Условия доставки
                        </a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="" className="footer__link">
                            Возврат товара
                        </a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#" className="footer__link">
                            Акции
                        </a>
                    </li>
                </ul>
        </div>
    )
}

export default Footer