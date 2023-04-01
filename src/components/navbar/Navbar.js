import styles from './navbar.module.css'
import shortid from 'shortid'
const Navbar = () => {

    let navbarArr = ['HOME', 'ABOUT', 'MENU', 'OFFERS', 'CONTACT']

    return (

        <div className={styles.navbarContainer}>
            {navbarArr.map((name, index) => (
                index===0 ?  <div className={styles.singleFirstContainer} key={shortid.generate()}>
                <p className={styles.name}>{name}</p>
            </div>:
                <div className={styles.singleContainer} key={shortid.generate()}>
                    <p className={styles.name}>{name}</p>
                </div>
            ))}
        </div>
    )
}

export default Navbar;