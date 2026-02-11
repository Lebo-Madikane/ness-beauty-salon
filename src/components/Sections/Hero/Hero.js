import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>HERO</h3>
                </div>
            </div>
        </section>
    )

}