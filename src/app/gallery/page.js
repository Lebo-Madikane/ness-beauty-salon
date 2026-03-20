import Header from "@/components/Layout/Header/Header"
import Cta from "@/components/Layout/CTA/Cta"
import Footer from "@/components/Layout/Footer/Footer"
import styles from "./page.module.scss"



export default function GalleryPage() {
    return (
        <>
            <Header />
            <Cta />
            <main className={styles.container}>
                <div className={styles.aboutOne}>
                    <h4>Pure Style</h4>
                    <p>Crafted from nature's best, every style is a blend of pure ingridients and vibrant product.</p>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.row}>
                        <div className={styles.galleryOne}></div>
                        <div className={styles.galleryTwo}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.galleryThree}></div>
                        <div className={styles.galleryFour}></div>
                    </div>
                </div>
                <div className={styles.aboutTwo}>
                    <p>Boys Cut: Special</p>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}