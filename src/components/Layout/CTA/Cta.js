import styles from './Cta.module.scss';
import Button from '@/components/UI/Button/Button';

export default function Cta() {
    
    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Button >Services</Button>
                    <Button variant='secondary'>Contact</Button>
                </div>
            </div>
        </section>
    )

}