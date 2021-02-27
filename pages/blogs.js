import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'
import styles from '../styles/Blogs.module.css'

const Blogs = () => {
    return (
        <Container pageTitle='Blogs' headerTitle='Blogs'>
            <section className={styles.blogs}>
                <p>In progress ...</p>
            </section>
            <LinkToHome></LinkToHome>
        </Container >
    )
}

export default Blogs