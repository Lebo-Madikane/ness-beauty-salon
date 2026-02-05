import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.nav}>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Contact</p>
                    <div>Book Now</div>
                </div>
            </div>
        </header>
    )
}