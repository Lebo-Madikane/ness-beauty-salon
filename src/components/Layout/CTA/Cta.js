import styles from './Cta.module.scss';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';

export default function Cta() {
    
    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href={"#services"}><Button >Services</Button></Link>
                    <Link href={"#contact"}><Button variant='secondary'>Contact</Button></Link>
                </div>
            </div>
        </section>
    )

}