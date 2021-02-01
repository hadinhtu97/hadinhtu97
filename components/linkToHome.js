import Link from 'next/link'
import styles from './linkToHome.module.css'

const LinkToHome = () => {
    return (
        <Link href='/'>
            <a className={styles.main}> &larr; Back To Home </a>
        </Link>
    )
}

export default LinkToHome