import Header from "@/components/Layout/Header/Header"
import Cta from "@/components/Layout/CTA/Cta"
import Footer from "@/components/Layout/Footer/Footer"
import styles from "./page.module.scss"
import Image from "next/image"



export default function GalleryPage() {
    return (
        <div className={styles.galleryPage}>
            <Header />
            <Cta />
            <main className={styles.container}>
                <div className={styles.aboutOne}>
                    <h4>Pure Style</h4>
                    <p>More than a hairstyle,<br /> it’s your transformation.<br />Walk in ordinary,<br />leave feeling like your best self.</p>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.row}>
                        <div className={styles.galleryOne}>
                            <Image className={styles.galleryImage} src='/images/services-images/Braides.webp' alt="Testimony Image" width={150} height={100} priority={true} />
                        </div>
                        <div className={styles.galleryTwo}>
                            <Image className={styles.galleryImage} src='/images/services-images/Braides.webp' alt="Testimony Image" width={150} height={100} priority={true} />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.galleryThree}>
                            <Image className={styles.galleryImage} src='/images/services-images/Braides.webp' alt="Testimony Image" width={150} height={100} priority={true} />
                        </div>
                        <div className={styles.galleryFour}>
                            <Image className={styles.galleryImage} src='/images/services-images/Braides.webp' alt="Testimony Image" width={150} height={100} priority={true} />
                        </div>
                    </div>
                </div>
                <div className={styles.aboutTwo}>
                    <h4>Boys Cut</h4>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle}>Clean</div>
                        <div className={styles.circle}>Fresh</div>
                        <div className={styles.circle}>Sharp</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}