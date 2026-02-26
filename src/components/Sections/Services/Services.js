import styles from './Services.module.scss'
import Card from '@/components/UI/Card/Card'

export default function Services() {

    const services = [
        {
            id: 1,
            style: "Buys Cut",
            price: "R600",
            image: "/images/",
        },
        {
            id: 2,
            style: "Buys Cut",
            price: "R600",
            image: "/images/",
        },
        {
            id: 3,
            style: "Buys Cut",
            price: "R600",
            image: "/images/",
        },
        {
            id: 4,
            style: "Buys Cut",
            price: "R600",
            image: "/images/",
        }
    ]

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {services.map((service, index) => (
                        <div key={service.id}>
                            <Card className={styles.serviceCard}>
                                <div className={styles.serviceCardContent}>
                                    <h6 className={styles.image}>IMAGE</h6>
                                    <h4 className={styles.style}>STYLE</h4>
                                    <p>starting from..</p>
                                    <h4 className={`${styles.price} ${styles.fle}`}>R700</h4>
                                    <h4 className={`${styles.cta} ${styles.fle}`} >BOOK NOW</h4>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}