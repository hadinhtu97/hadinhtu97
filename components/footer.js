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
        </footer>
    )
}

export default Footer