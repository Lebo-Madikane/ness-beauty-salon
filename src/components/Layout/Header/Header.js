import styles from './Header.module.scss'
import Button from '../../UI/Button/Button'
import Link from 'next/link';


export default function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='/' className={styles.logo}>NBS</Link>
                <div className={styles.nav}>
                    <Link href='/'>Home</Link>
                    <Link href='/services' className={styles.desktopNav}>Services</Link>
                    <Link href='/contact' className={styles.desktopNav}>Contact</Link>
                    <Button>Book Now</Button>
                </div>
            </div>
        </header>
    )
}