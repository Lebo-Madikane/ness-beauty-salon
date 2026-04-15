import Button from '@/components/UI/Button/Button'
import styles from './Services.module.scss'
import Card from '@/components/UI/Card/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {

    const services = [
        {
            id: 1,
            style: "Braids",
            price: "R900",
            image: '/images/services-images/Braides.webp',
        },
        {
            id: 2,
            style: "Buys Cut",
            price: "R600",
            image: '/images/services-images/Braides.webp',
        },
        {
            id: 3,
            style: "Wash",
            price: "R300",
            image: '/images/services-images/Braides.webp',
        },
        {
            id: 4,
            style: "Installation",
            price: "R1500",
            image: '/images/services-images/Braides.webp',
        }
    ]

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {services.map((service, index) => (
                        <div key={service.id}>
                            <Card className={styles.serviceCard}>
                                <div className={styles.serviceCardContent}>
                                    <Image className={styles.image} src={service.image} alt="Service Image" width={150} height={100} priority={true} />
                                    <h4 className={styles.style}>{service.style}</h4>
                                    <p>starting from..</p>
                                    <h4 className={`${styles.price} ${styles.fle}`}>{service.price}</h4>
                                    <Link href={'/#form'}><Button className={`${styles.cta} ${styles.fle}`} >BOOK NOW</Button></Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}