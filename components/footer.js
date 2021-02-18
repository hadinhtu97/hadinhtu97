import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                NextJS
            </a>
            <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                Vercel
            </a>
            <a
                href="https://github.com/hadinhtu97/hadinhtu97"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                Source Code
            </a>
        </footer>
    )
}

export default Footer