import styles from './api.module.css'
import Link from 'next/link'

const Api = ({ apiName, description, githubName }) => {
    let path = '/api/' + apiName
    let urlGithub = 'https://github.com/hadinhtu97/' + githubName + '#readme'
    return (
        <article className={styles.article}>
            <Link href={path}><a target='_blank' className={styles.path}>{path}</a></Link>
            {description.map((item) => <div><span className={styles.description}>{item}</span></div>)}
            <div>Description on <a href={urlGithub} target='_blank'>Github</a></div>
        </article>
    )
}

export default Api