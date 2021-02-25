import Container from '../../components/container'
import LinkToHome from '../../components/linkToHome'
import styles from '../../styles/blogs.module.css'

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