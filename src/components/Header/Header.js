'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.nav}>
                    <p>Home</p>
                    <p className={styles.desktopNav}>Services</p>
                    <p className={styles.desktopNav}>Contact</p>
                    <div>Book Now</div>
                </div>
            </div>
        </header>
    )
}