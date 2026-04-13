import styles from './Header.module.scss'
import Button from '@/components/UI/Button/Button'
import Link from 'next/link';


export default function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='/#hero' className={styles.logo}>NBS</Link>
                <div className={styles.nav}>
                    <Link href='/#hero' className={styles.list}>Home</Link>
                    <Link href='/#services' className={`${styles.desktopNav} ${styles.list}`}>Services</Link>
                    <Link href='/#contact' className={`${styles.desktopNav} ${styles.list}`} >Contact</Link>
                    <Button href="/#form">Book Now</Button>
                </div>
            </div>
        </header>
    )
}