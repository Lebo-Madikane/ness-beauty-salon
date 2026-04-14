import styles from './Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';

export default function Footer() {

    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            url: 'https://wa.me/27763800939',
            ariaLabel: 'WhatsApp',
            rel: 'noopener noreferrer'
        },
        {
            name: 'TikTok',
            icon: FaTiktok,
            url: 'https://tiktok.com/@nessbeautysalon',
            ariaLabel: 'TikTok'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/nessbeautysalon',
            ariaLabel: 'Instagram',
            rel: 'noopener noreferrer'
        },
        {
            name: 'Facebook',
            icon: FaFacebookF,
            url: 'https://facebook.com/nessbeautysalon', 
            ariaLabel: 'Facebook'
        }
    ];

    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.socialIcons}>
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={social.ariaLabel}
                                    className={styles.socialLink}
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
                    </div>
                    <div className={styles.msg}>
                        <span className={styles.line}></span>Choose Your Crown<span className={styles.line}></span>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/gallery">
                            <Button>Gallery</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )

}