import Head from 'next/head'
import styles from '../styles/main.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&lt; /&gt;</title>
        <link rel="icon" href="/title.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I am <span className={styles.blue}>Tu.</span>
        </h1>

        <p className={styles.description}>
          A self-taught web developer.
        </p>

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
              <p>All the certifications that I have completed.</p>
            </a>
          </Link>
          <Link href='/blog'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Blog &rarr;</h3>
              <p>Articles about technology (in progress)</p>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.card}>
              <h3 className={styles.blue}>About &rarr;</h3>
              <p>Brief description of myself.</p>
            </a>
          </Link>
          <Link href='/contact'>
            <a className={styles.card}>
              <h3 className={styles.blue}>Contact &rarr;</h3>
              <p>Contact with me through the following ways.</p>
            </a>
          </Link>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.blue}
        >
          I create this website by using {' '}
          <img src="/nextjs.svg" alt="Nextjs Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
