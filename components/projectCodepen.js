import Codepen from 'react-codepen-embed'
import styles from './projectCodepen.module.css'

const ProjectCodePen = ({ title, description, hash }) => {
    let user = 'hadinhtu97';
    let height = '500';
    let defaultTab = 'html,result';
    return (
        <article className={styles.article}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Codepen hash={hash} user={user} height={height} defaultTab={defaultTab} />
        </article>
    )
}

export default ProjectCodePen