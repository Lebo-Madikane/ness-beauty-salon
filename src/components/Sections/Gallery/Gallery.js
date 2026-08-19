"use client";
import styles from "./Gallery.module.scss"
import Image from "next/image"
import { motion } from "motion/react";



export default function Gallery() {
    return (
        <motion.div className={styles.gallery}
            initial={{ scale: 0, y: 40 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
            <div className={`${styles.row} ${styles.rowOne}`}>
                <div className={styles.galleryOne}>
                    <Image className={styles.galleryImage} src='/images/gallery-images/conroads.webp' alt="Women Hairsyle Image" width={150} height={100} priority={true} />
                </div>
                <div className={styles.galleryTwo}>
                    <Image className={styles.galleryImage} src='/images/gallery-images/natural.webp' alt="Women Hairsyle Image" width={150} height={100} priority={true} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.galleryThree}>
                    <Image className={styles.galleryImage} src='/images/gallery-images/wool.webp' alt="Women Hairsyle Image" width={150} height={100} priority={true} />
                </div>
                <div className={styles.galleryFour}>
                    <Image className={styles.galleryImage} src='/images/gallery-images/shortHair.webp' alt="Women Hairsyle Image" width={150} height={100} priority={true} />
                </div>
            </div>
        </motion.div>
    )
}