import Container from '../components/Container'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Component = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <h3>{title} &rarr; </h3>
        <p>{description}</p>
      </a>
    </Link>
  )
}

const Home = () => {
  return (
    <Container pageTitle='&lt; /&gt;' headerTitle='Hello, I am Tu.' headerDescription='A self-taught web developer.'>
      <section className={styles.home}>
        <Component href='/projects' title='Projects' description='Personal projects that I have completed or are developing.' />
        <Component href='/skills' title='Skills' description='Languages, frameworks, libraries that I can use.' />
        <Component href='/certifications' title='Certifications' description='Certifications I have completed from online platforms.' />
        <Component href='/about' title='About' description='Briefly introduce myself and the work I have done.' />
        <Component href='/contact' title='Contact' description='Contact with me through the following ways.' />
        <Component href='https://hadinhtu97.hashnode.dev/' title='Blogs' description='Some of my articles on technologies, etc (in progress).' />
      </section>
    </Container>
  )
}

export default Home