import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.top}></div>
                <div className={styles.mid}></div>
                <div className={styles.bottom}></div>
            </div>
        </header>
    )
}