import Container from '../components/container'
import LinkToHome from '../components/linkToHome'
import styles from '../styles/contact.module.css'

const Contact = () => {
    return (
        <Container pageTitle='Contact' headerTitle='Contact'>
            <section className={styles.contact}>
                <p>Contact with me via :</p>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/tu.hadinh.97/' target='_blank'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://twitter.com/hadinhtu97' target='_blank'>Twitter</a>
                    </li>
                    <li>
                        <a href='mailto::hadinhtu97@gmail.com' target='_blank'>hadinhtu97@gmail.com</a>
                    </li>
                    <li>
                        <a href='tel::84345790862' target='_blank'>(84) 345-790-862</a>
                    </li>
                </ul>
            </section>
            <LinkToHome/>
        </Container>
    )
}

export default Contact