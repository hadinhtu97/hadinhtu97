import Container from '../components/container'
import LinkToHome from '../components/linkToHome'

import styles from '../styles/skills.module.css'

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
                <Section title='Programming'>
                    <Skill title='c' imgSrc='/images/skills/c.png' />
                    <Skill title='python' imgSrc='/images/skills/python.jpeg' />
                </Section>
                <Section title='Frontend'>
                    <Skill title='html' imgSrc='/images/skills/html.png' />
                    <Skill title='css' imgSrc='/images/skills/css.png' />
                    <Skill title='sass' imgSrc='/images/skills/sass.png' />
                    <Skill title='bootstrap' imgSrc='/images/skills/bootstrap.png' />
                    <Skill title='javascript' imgSrc='/images/skills/javascript.png' />
                    <Skill title='es6' imgSrc='/images/skills/es6.png' />
                    <Skill title='jquery' imgSrc='/images/skills/jquery.png' />
                    <Skill title='d3' imgSrc='/images/skills/d3.jpeg' />
                    <Skill title='react' imgSrc='/images/skills/react.png' />
                    <Skill title='redux' imgSrc='/images/skills/redux.png' />
                </Section>
                <Section title='Backend'>
                    <Skill title='nodejs' imgSrc='/images/skills/nodejs.jpeg' />
                    <Skill title='nextjs' imgSrc='/images/skills/nextjs.png' />
                    <Skill title='express' imgSrc='/images/skills/express.jpeg' />
                    <Skill title='mongoose' imgSrc='/images/skills/mongoose.png' />
                    <Skill title='chai' imgSrc='/images/skills/chai.jpeg' />
                    <Skill title='mocha' imgSrc='/images/skills/mocha.png' />
                    <Skill title='sql' imgSrc='/images/skills/sql.jpeg' />
                    <Skill title='mongodb' imgSrc='/images/skills/mongodb.png' />
                </Section>
                <Section title='Others'>
                    <Skill title='git' imgSrc='/images/skills/git.png' />
                    <Skill title='docker' imgSrc='/images/skills/docker.png' />
                    <Skill title='vscode' imgSrc='/images/skills/vscode.png' />
                    <Skill title='ubuntu' imgSrc='/images/skills/ubuntu.png' />
                </Section>
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Skills