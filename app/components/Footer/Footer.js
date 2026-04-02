import styles from "./Footer.module.css"
import Link from 'next/link'

export default function Footer() {
    const actualYear = new Date().getFullYear()
    const socialMedia = [
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/',
            icons: '/linkedIn.svg'
        }
    ]
    return (
        <footer className={styles.footer}>
            <div>Copyright © {actualYear}. Tous droits réservés - Tristan Brasseur</div>
            <div className={styles.socialMedia}>
                {socialMedia.map((s) =>(
                    <Link target="_blank" rel="noopener noreferrer" key={s.title} href={s.link}>
                        <img className={styles.icons} src={s.icons} alt={s.title} />
                    </Link>
                ))}
            </div>
        </footer>
    )    
};
