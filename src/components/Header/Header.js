import styles from './Header.module.scss'
import Button from '../UI/Button/Button'


export default function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h2 className={styles.logo}>NBS</h2>
                <div className={styles.nav}>
                    <p>Home</p>
                    <p className={styles.desktopNav}>Services</p>
                    <p className={styles.desktopNav}>Contact</p>
                    <Button />
                </div>
            </div>
        </header>
    )
}