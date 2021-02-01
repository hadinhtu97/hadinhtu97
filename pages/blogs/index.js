import Container from '../../components/container'
import LinkToHome from '../../components/linkToHome'
import styles from '../../styles/Blogs.module.css'

const Blogs = () => {
    return (
        <Container pageTitle='Blogs' headerTitle='Blogs'>
            <div className={styles.blogs}>
                <p>In progress ...</p>
            </div>
            <LinkToHome></LinkToHome>
        </Container >
    )
}

export default Blogs