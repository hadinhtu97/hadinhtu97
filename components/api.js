import styles from './api.module.css'
import Link from 'next/link'

const Api = ({ apiName, description, githubName }) => {
    let path = '/api/' + apiName
    let urlGithub = 'https://github.com/hadinhtu97/' + githubName + '#readme'
    return (
        <article className={styles.article}>
            <Link href={path}><a target='_blank' className={styles.path}>{path}</a></Link>
            <ul>
                {description.map((item, index) => <li key={index}><span className={styles.description}>{item}</span></li>)}
                <li>Description on <a href={urlGithub} target='_blank'>Github</a></li>
            </ul>
        </article>
    )
}

export default Api