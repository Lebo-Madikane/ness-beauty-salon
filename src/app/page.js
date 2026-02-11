import Header from "@/components/Layout/Header/Header"
import Cta from "@/components/Layout/CTA/Cta"
import ScrollSections from "@/components/Layout/ScrollSections/ScrollSections"
import Footer from "@/components/Layout/Footer/Footer"



export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Cta />
                <ScrollSections />
                <Footer />
            </main>
        </>
    )
}