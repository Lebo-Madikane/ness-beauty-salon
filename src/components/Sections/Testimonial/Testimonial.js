import styles from './Testimonial.module.scss'

export default function Testimonial() {
    return (
        <section id='contact' className={styles.testimonial}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.testimony}>
                        <div className={styles.qoute}>"</div>
                        <p>The atmosphere at Ness Beauty Salon is as refined as the style.
                            I’ve never felt so understood by a stylist.  Truly an artistic experience.</p>
                        <span></span>
                        <h6>ELENA VANCE</h6>
                        <p>Loyal Customer Since 2017</p>
                    </div>
                    <div className={styles.location}>
                        <p className='address'> 100 Plain Street, Cape Town</p>
                    </div>
                    <div className={styles.contact}>
                        <p>Call: 076 380 0939<br />Email: nosi_pure@yahoo.com</p>
                    </div>
                </div>
            </div>
        </section>
    )

}