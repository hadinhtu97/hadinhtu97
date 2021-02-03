import Link from 'next/link'
import styles from './linkToHome.module.css'

const LinkToProjects = () => {
    return (
        <Link href='/projects'>
            <a className={styles.main}> &larr; Back To Projects </a>
        </Link>
    )
}

export default LinkToProjects