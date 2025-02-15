 import styles from "./header.module.css"
 
 
 function Header() {

    const locationIcon = "../../../src/assets/icons/icon-location-white.svg"
    return (
        <header>
            <div className={styles.headerTop}>
                <div className={styles.headerTopInfo}>
                    <div><span className={styles.headerLogo}>IBRAIN</span></div>
                    <div className={styles.headerLocationWrapper}>
                        <input type="text" className={styles.headerLocation} placeholder="Введите адрес доставки"/>
                        <img className={styles.headerLocationLeftIcon} src={locationIcon}
                            alt="локация"/>
                        <img className={styles.headerLocationRightIcon} src="../../../src/assets/icons/icon-search.svg" alt="поиск"/>
                    </div>
                    <div>
                        <a className={styles.headerCall} href="tel:+79175105759">
                            <div className={styles.headerCallIconWrapper}><img src="../../../src/assets/icons/icon-call.svg" alt="call"/>
                            </div>
                            <div><span className={styles.secondaryText}>Контакты:
                                </span>+7 (917) 510-57-59</div>
                        </a>
                    </div>
                </div>

                <div className={styles.headerBasketWrapper}>
                    <button className={styles.headerBasket}>Корзина<div className={styles.line}></div>0</button>
                </div>
            </div>

            
        </header>
    )
 }

 export default Header