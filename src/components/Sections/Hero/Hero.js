import styles from './Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={`${styles.heading}`}><span className={styles.ness}>NESS</span> <span className={styles.beauty}>BEAUTY</span> <span className={styles.salon}>SALON</span></h1>
                    <Image className={`${styles.structure} ${styles.main}`} src='/images/hero-images/heroImg1.svg' alt="Hero Image" width={150} height={100} priority={true} />
                </div>
            </div>
        </section>
    )

}