import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'
import styles from '../styles/Projects.module.css'

import frontendProjects from '../data/frontend'
import backendProjects from '../data/backend'
import fullstackProjects from '../data/fullstack'
import pythonProjects from '../data/python'

const ShowListProject = ({ projects }) => {
    return (
        <>
            <tr>
                <th rowSpan={projects.list.length + 1} className={styles.typeColumn}>{projects.type}</th>
            </tr>
            {
                projects.list.map((project, i) =>
                    <tr key={i}>
                        <td className={styles.projectName}>{project.name}</td>
                        <td className={styles.projectTechs}>{project.techs.map((tech, i) => <li key={i}>{tech}</li>)}</td>
                        <td className={styles.projectDescription}>{project.description}</td>
                        <td className={styles.projectLinks}>
                            <a href={project.viewLink} target='_blank'>View</a>
                            <a href={project.souceLink} target='_blank'>Souce</a>
                        </td>
                    </tr>
                )
            }
        </>
    )
}

const Projects = () => {
    return (
        <Container pageTitle='Projects' headerTitle='Projects'>
            <LinkToHome />
            <section className={styles.projects}>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Use</th>
                            <th>Description</th>
                            <th>Souce</th>
                        </tr>
                        <ShowListProject projects={fullstackProjects} />
                        <ShowListProject projects={frontendProjects} />
                        <ShowListProject projects={backendProjects} />
                        <ShowListProject projects={pythonProjects} />
                    </tbody>
                </table>
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Projects