"use client";
import styles from './Hero.module.scss'
import Image from 'next/image'
import { motion } from "motion/react";

export default function Hero() {
    return (
        <motion.section id="hero" className={styles.hero}
            initial={{ scale: 0, y: 40 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={`${styles.heading}`}><span className={styles.ness}>NESS</span> <span className={styles.beauty}>BEAUTY</span> <span className={styles.salon}>SALON</span></h1>
                    <Image className={`${styles.structure} ${styles.main}`} src='/images/hero-images/heroImg1.svg' alt="Hero Image" width={150} height={100} priority={true} />
                </div>
            </div>
        </motion.section>
    )

}