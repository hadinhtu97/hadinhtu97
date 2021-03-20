import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'
import styles from '../styles/Projects.module.css'

import frontendProjects from '../data/frontend'
import backendProjects from '../data/backend'
import fullstackProjects from '../data/fullstack'
import pythonProjects from '../data/python'

const ListProject = ({ projects }) => {
    return (
        <>
            <h2 className={styles.type}>{projects.type}</h2>
            <div className={styles.projects}>
                {
                    projects.list.map((project, i) =>
                        <article key={i} className={styles.project}>
                            <h3 className={styles.name}>{project.name}</h3>
                            <div className={styles.techs}>{project.techs.map((tech, i) => <li key={i}>{tech}</li>)}</div>
                            <p className={styles.description}>{project.description}</p>
                            <p className={styles.links}>
                                <a href={project.viewLink} target='_blank'>View</a>
                                <a href={project.souceLink} target='_blank'>Souce</a>
                            </p>
                        </article>
                    )
                }
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <Container pageTitle='Projects'>
            <LinkToHome />
            <section className={styles.content}>
                <ListProject projects={fullstackProjects} />
                <ListProject projects={frontendProjects} />
                <ListProject projects={backendProjects} />
                <ListProject projects={pythonProjects} />
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Projects