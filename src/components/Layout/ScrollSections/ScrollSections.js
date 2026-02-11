import styles from './ScrollSections.module.scss';
import Hero from '@/components/Sections/Hero/Hero';
import Services from '@/components/Sections/Services/Services';
import Form from '@/components/Sections/Form/Form';
import Testimonial from '@/components/Sections/Testimonial/Testimonial';

export default function Cta() {

    return (
        <section className={styles.scrollSections}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Hero />
                    <Services />
                    <Form />
                    <Testimonial />
                </div>
            </div>
        </section>
    )

}