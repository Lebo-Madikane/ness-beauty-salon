import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h3>CTA</h3>
                </div>
                <div className={styles.mid}>
                    <h3>HERO</h3>
                    <h3>SERVICES</h3>
                    <h3>BOOKING FORM</h3>
                    <h3>TESTIMONIAL</h3>
                </div>
                <div className={styles.bottom}>
                    <h3>FOOTER</h3>
                </div>
            </div>
        </header>
    )
}