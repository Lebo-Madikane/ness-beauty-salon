import styles from "./page.module.scss"
import Header from "@/components/Layout/Header/Header"
import Cta from "@/components/Layout/CTA/Cta"
import ScrollSections from "@/components/Layout/ScrollSections/ScrollSections"
import Footer from "@/components/Layout/Footer/Footer"



export default function HomePage() {
    return (
        <div className={styles.homepage}>
            <Header />
            <main>
                <Cta />
                <ScrollSections />
                <Footer />
            </main>
        </div>
    )
}