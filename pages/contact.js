import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <Container pageTitle='Contact' headerTitle='Contact'>
            <section className={styles.contact}>
                <a href='https://github.com/hadinhtu97' target='_blank'>Github</a>
                <a href='https://www.facebook.com/tu.hadinh.97/' target='_blank'>Facebook</a>
                <a href='https://twitter.com/hadinhtu97' target='_blank'>Twitter</a>
                <a href='mailto::hadinhtu97@gmail.com' target='_blank'>hadinhtu97@gmail.com</a>
                <a href='tel::84345790862' target='_blank'>(84) 345-790-862</a>
            </section>
            <LinkToHome />
        </Container >
    )
}

export default Contact