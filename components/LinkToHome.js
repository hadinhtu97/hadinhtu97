import Link from 'next/link'
import styles from './LinkToHome.module.css'

const LinkToHome = () => {
    return (
        <Link href='/'>
            <a className={styles.main}> &larr; Back</a>
        </Link>
    )
}

export default LinkToHome