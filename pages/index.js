import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Container from '../components/container'

export default function Home() {
  return (
    <Container pageTitle='&lt; /&gt;' headerTitle='Hello, I am Tu.' headerDescription='A self-taught web developer'>

        <div className={styles.grid}>
          <Link href='/projects'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Projects &rarr;</h3>
              <p>Personal projects that I have completed or are developing.</p>
            </a>
          </Link>
          <Link href='/skills'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Skills &rarr;</h3>
              <p>Programming languages, frameworks, library that I can use.</p>
            </a>
          </Link>
          <Link href='/certifications'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Certifications &rarr;</h3>
              <p>Certifications I have completed from online platforms.</p>
            </a>
          </Link>
          <Link href='/blog'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Blog &rarr;</h3>
              <p>Some of my articles on technologies, etc (in progress).</p>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.card}>
              <h3 className={styles.blue}>About &rarr;</h3>
              <p>Briefly introduce myself and the work I have done.</p>
            </a>
          </Link>
          <Link href='/contact'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Contact &rarr;</h3>
              <p>Contact with me through the following ways.</p>
            </a>
          </Link>
        </div>

    </Container>
  )
}
