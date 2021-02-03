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
                I create this website by using {' '}
                <img src="/nextjs.svg" alt="Nextjs Logo" className={styles.logo} />
            </a>
            <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                Powered by {' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
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