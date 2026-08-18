"use client";
import Button from '@/components/UI/Button/Button'
import styles from './Services.module.scss'
import Card from '@/components/UI/Card/Card'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react";

export default function Services() {

    const services = [
        {
            id: 1,
            style: "Braids",
            price: "R900",
            image: '/images/services-images/hairBraides.webp',
        },
        {
            id: 2,
            style: "Buys Cut",
            price: "R600",
            image: '/images/services-images/boysCut.webp',
        },
        {
            id: 3,
            style: "Wash",
            price: "R300",
            image: '/images/services-images/hairWash.webp',
        },
        {
            id: 4,
            style: "Installation",
            price: "R1500",
            image: '/images/services-images/hairInstallationn.webp',
        }
    ]

    return (
        <motion.section id="services" className={styles.services}
            initial={{ scale: 0, y: 40 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    {services.map((service, index) => (
                        <div key={service.id}>
                            <Card className={styles.serviceCard}>
                                <div className={styles.serviceCardContent}>
                                    <Image className={styles.image} src={service.image} alt="Hair Style Images" width={150} height={100} priority={true} />
                                    <h4 className={styles.style}>{service.style}</h4>
                                    {/* <p>starting from..</p> */}
                                    <h4 className={`${styles.price} ${styles.fle}`}>+{service.price}</h4>
                                    <Link href={'/#form'}><Button className={`${styles.cta} ${styles.fle}`} >BOOK NOW</Button></Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )

}