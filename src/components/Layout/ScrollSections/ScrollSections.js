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
                <p>Crafted from nature's best, every style is a blend of pure ingridients and vibrant product.</p>
            </div>
            <section className={styles.panel}><Hero /></section>
            <section className={styles.panel}><Services /></section>
            <section className={styles.panel}><Form /></section>
            <section className={styles.panel}><Testimonial /></section>
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