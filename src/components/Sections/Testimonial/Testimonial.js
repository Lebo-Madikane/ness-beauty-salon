import styles from './Testimonial.module.scss'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <section id='contact' className={styles.testimonial}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.testimony}>
                        <div className={styles.qoute}>"</div>
                        <p>I’ve never felt so understood by a stylist.  Truly an artistic experience.</p>
                        <Image className={styles.span} src='/images/services-images/Braides.webp' alt="Testimony Image" width={150} height={100} priority={true} />
                        <h5>ELENA VANCE</h5>
                        <p>Loyal Customer Since 2017</p>
                    </div>
                    <div className={styles.location}>
                        <p className={styles.address}> 100 Plain Street, Cape Town</p>
                    </div>
                    <div className={styles.contact}>
                        <p>Call: 076 380 0939<br />Email: nosi_pure@yahoo.com</p>
                    </div>
                </div>
            </div>
        </section>
    )

}