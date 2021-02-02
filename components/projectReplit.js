import Iframe from 'react-iframe'
import styles from './projectReplit.module.css'

const ProjectReplit = ({ title, description, note }) => {
    let width = '100%';
    let height = '500px';
    let url = 'https://repl.it/@hadinhtu97/' + title.toLowerCase().split(' ').join('-') + '?lite=true';
    return (
        <article className={styles.article}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Iframe url={url} width={width} height={height} />
            <div className={styles.note}>{note}</div>
        </article>
    )
}

export default ProjectReplit