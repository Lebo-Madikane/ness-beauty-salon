import styles from './Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.structure}>NESS SALON</h1>
                    <Image className={styles.structure} src='/images/hero-images/hero-main.webp' alt="Hero Image" width={150} height={100} priority={true} />
                    <Image className={styles.structure} src='/images/hero-images/hair-cropped.webp' alt="Hero Image" width={150} height={100} priority={true} />
                    <h2 className={styles.structure}>BEAUTY</h2>
                    <Image className={styles.structure} src='/images/hero-images/hair-full.webp' alt="Hero Image" width={150} height={100} priority={true} />
                </div>
            </div>
        </section>
    )

}