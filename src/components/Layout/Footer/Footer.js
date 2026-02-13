import styles from './Footer.module.scss';
import {FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF} from 'react-icons/fa'

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
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/nessbeautysalon',
            ariaLabel: 'Instagram',
            rel: 'noopener noreferrer'
        },
        {
            name: 'TikTok',
            icon: FaTiktok,
            url: 'https://tiktok.com/@nessbeautysalon', 
            ariaLabel: 'Follow us on TikTok'
        },
        {
            name: 'Facebook',
            icon: FaFacebookF,
            url: 'https://facebook.com/nessbeautysalon', 
            ariaLabel: 'Follow us on Facebook'
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

                                >
                                    <Icon size={20} />
                                </a>
                            )
                        })}
                    </div>
                    <div className={styles.msg}></div>
                    <div className={styles.cta}></div>
                </div>
            </div>
        </section>
    )

}