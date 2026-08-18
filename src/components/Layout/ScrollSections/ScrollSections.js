import styles from './ScrollSections.module.scss';
import Hero from '@/components/Sections/Hero/Hero';
import Services from '@/components/Sections/Services/Services';
import Form from '@/components/Sections/Form/Form';
import Testimonial from '@/components/Sections/Testimonial/Testimonial';

export default function ScrollSections() {

    return (
        <main className={styles.scroll}>
            <div className={styles.aboutOne}>
                <h4>Pure Style</h4>
                <p>More than a hairstyle,<br /> it’s your transformation.<br />Walk in ordinary,<br />leave feeling like your best self.</p>
            </div>
            <section id="hero" className={styles.panel}><Hero /></section>
            <section id="services" className={styles.panel}><Services /></section>
            <section id="form" className={styles.panel}><Form /></section>
            <section id="contact" className={styles.panel}><Testimonial /></section>
            <div className={styles.aboutTwo}>
                <h4>Boys Cut</h4>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}>Clean</div>
                    <div className={styles.circle}>Fresh</div>
                    <div className={styles.circle}>Sharp</div>
                </div>
            </div>
        </main>
    )

}