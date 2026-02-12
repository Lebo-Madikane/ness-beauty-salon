import styles from './ScrollSections.module.scss';
import Hero from '@/components/Sections/Hero/Hero';
import Services from '@/components/Sections/Services/Services';
import Form from '@/components/Sections/Form/Form';
import Testimonial from '@/components/Sections/Testimonial/Testimonial';

export default function ScrollSections() {

    return (
        <main className={styles.scroll}>
            <section className={styles.panel}><Hero /></section>
            <section className={styles.panel}><Services /></section>
            <section className={styles.panel}><Form /></section>
            <section className={styles.panel}><Testimonial /></section>
        </main>
    )

}