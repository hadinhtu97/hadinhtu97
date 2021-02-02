import Container from '../../components/container'
import LinkToHome from '../../components/linkToHome'
import Link from 'next/link'

import styles from '../../styles/projects.module.css'

const Article = ({ title, description }) => {
    let href = '/projects/' + title.toLowerCase().split(' ').join('-');
    console.log(href)
    return (
        <Link href={href}>
            <a className={styles.card}>
                <h3 className={styles.blue}>{title} &rarr; </h3>
                <p>{description}</p>
            </a>
        </Link>
    )
}

const Projects = () => {
    return (
        <Container pageTitle='Projects' headerTitle="Projects">
            <LinkToHome></LinkToHome>
            <section className={styles.projects}>
                <Article title='RWD' description='Build web pages for presentation with pure html and pure css.'></Article>
                <Article title='FEL' description='Build web pages for different functions with javascript, jquery, react.'></Article>
                <Article title='DV' description='Build web pages that display data graphically with D3js, JSON APIs, Ajax.'></Article>
                <Article title='API' description='Build APIs for website backend with nodejs, express, mongoose.'></Article>
                <Article title='PY' description='Build simple functional functions with python.'></Article>
                <Article title='DA' description='Data analysis with numpy, pandas, matplotlib, seaborn.'></Article>
                <Article title='PT' description='Python for penetration testing with hash, socket.'></Article>
            </section>
            <LinkToHome></LinkToHome>
        </Container>
    )
}

export default Projects