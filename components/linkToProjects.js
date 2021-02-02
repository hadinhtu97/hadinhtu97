import Link from 'next/link'
import styles from './linkToHome.module.css'

const LinkToHome = () => {
    return (
        <Link href='/projects'>
            <a className={styles.main}> &larr; Back To Projects </a>
        </Link>
    )
}

export default LinkToHome