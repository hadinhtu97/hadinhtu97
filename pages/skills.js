import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'

import styles from '../styles/Skills.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <h3>{title}</h3>
            <article className={styles.article}>{children}</article>
        </section>
    )
}

const Skill = ({ title, imgSrc, }) => {
    return (
        <div className={styles.skill}>
            <img className={styles.img} src={imgSrc} title={title} />
            <p>{title}</p>
        </div>
    )
}

const Skills = () => {
    return (
        <Container pageTitle='Skills' headerTitle='Skills'>
            <LinkToHome />
            <section className={styles.skills}>
                <Section title='Frontend'>
                    <Skill title='html' imgSrc='/skills/html.png' />
                    <Skill title='css' imgSrc='/skills/css.png' />
                    <Skill title='sass' imgSrc='/skills/sass.png' />
                    <Skill title='bootstrap' imgSrc='/skills/bootstrap.png' />
                    <Skill title='javascript' imgSrc='/skills/javascript.png' />
                    <Skill title='ecma' imgSrc='/skills/ecmascript.png' />
                    <Skill title='jquery' imgSrc='/skills/jquery.png' />
                    <Skill title='d3' imgSrc='/skills/d3.jpeg' />
                    <Skill title='react' imgSrc='/skills/react.png' />
                </Section>
                <Section title='Backend'>
                    <Skill title='nodejs' imgSrc='/skills/nodejs.jpeg' />
                    <Skill title='nextjs' imgSrc='/skills/nextjs.png' />
                    <Skill title='express' imgSrc='/skills/express.jpeg' />
                    <Skill title='chai' imgSrc='/skills/chai.jpeg' />
                    <Skill title='mocha' imgSrc='/skills/mocha.png' />
                    <Skill title='mongoose' imgSrc='/skills/mongoose.png' />
                    <Skill title='mongodb' imgSrc='/skills/mongodb.png' />
                    <Skill title='sql' imgSrc='/skills/sql.jpeg' />
                </Section>
                <Section title='Programming'>
                    <Skill title='python' imgSrc='/skills/python.jpeg' />
                </Section>
                <Section title='Others'>
                    <Skill title='git' imgSrc='/skills/git.png' />
                    <Skill title='docker' imgSrc='/skills/docker.png' />
                    <Skill title='linux' imgSrc='/skills/linux.jpeg' />
                </Section>
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Skills