import styles from './Header.module.scss'
import Button from '../UI/Button/Button'
import Link from 'next/link';


export default function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='#/'>
                    <h2 className={styles.logo}>NBS</h2>
                </Link>
                <div className={styles.nav}>
                    <Link href='#/'>
                        <p>Home</p>
                    </Link>
                    <Link href='#/'>
                        <p className={styles.desktopNav}>Services</p>
                    </Link>
                    <Link href='#/'>
                        <p className={styles.desktopNav}>Contact</p>
                    </Link>
                    <Button>Book Now</Button>
                </div>
            </div>
        </header>
    )
}