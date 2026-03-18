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
            </main>
            <Footer />
        </>
    )
}