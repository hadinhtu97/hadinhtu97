import Container from '../components/container'
import styles from '../styles/projects.module.css'
import LinkToHome from '../components/linkToHome'

const Projects = () => {
    return (
        <Container pageTitle='Projects' headerTitle='Projects'>
            <LinkToHome />
            <section className={styles.projects}>

            </section>
            <LinkToHome />
        </Container>
    )
}

export default Projects