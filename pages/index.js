import Container from '../components/container'
import styles from '../styles/home.module.css'
import Link from 'next/link'

const Article = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <h3 className={styles.blue}>{title} &rarr; </h3>
        <p>{description}</p>
      </a>
    </Link>
  )
}

const Home = () => {
  return (
    <Container pageTitle='&lt; /&gt;' headerTitle='Hello, I am Tu.' headerDescription='A self-taught web developer.'>
      <section className={styles.home}>
        <Article href='/projects' title='Projects' description='Personal projects that I have completed or are developing.' />
        <Article href='/skills' title='Skills' description='Languages, frameworks, libraries that I can use.' />
        <Article href='/certifications' title='Certifications' description='Certifications I have completed from online platforms.' />
        <Article href='/blogs' title='Blogs' description='Some of my articles on technologies, etc (in progress).' />
        <Article href='/about' title='About' description='Briefly introduce myself and the work I have done.' />
        <Article href='/contact' title='Contact' description='Contact with me through the following ways.' />
      </section>
    </Container>
  )
}

export default Home