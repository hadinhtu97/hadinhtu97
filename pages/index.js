import Container from '../components/container'
import styles from '../styles/Home.module.css'
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
    <Container pageTitle='&lt; /&gt;' headerTitle='Hello, I am Tu.' headerDescription='A self-taught web developer'>

      <div className={styles.home}>

        <Article href='/projects' title='Projects' description='Personal projects that I have completed or are developing.'></Article>
  
        <Article href='/skills' title='Skills' description='Programming languages, frameworks, library that I can use.'></Article>
        
        <Article href='/certifications' title='Certification' description='Certifications I have completed from online platforms.'></Article>
        
        <Article href='/blogs' title='Blogs' description='Some of my articles on technologies, etc (in progress).'></Article>
        
        <Article href='/about' title='About' description='Briefly introduce myself and the work I have done.'></Article>
        
        <Article href='/contact' title='Contact' description='Contact with me through the following ways.'></Article>
        
      </div>

    </Container>
  )
}


export default Home