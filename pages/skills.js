import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'

import styles from '../styles/Skills.module.css'

const SkillGroup = ({ title, children }) => {
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
        <Container pageTitle='Skills'>
            <LinkToHome />
            <section className={styles.skills}>
                <SkillGroup title='I would love to talk and work with'>
                    <Skill title='html' imgSrc='/skills/html.png' />
                    <Skill title='css' imgSrc='/skills/css.png' />
                    <Skill title='javascript' imgSrc='/skills/javascript.png' />
                    <Skill title='react' imgSrc='/skills/react.png' />
                    <Skill title='nodejs' imgSrc='/skills/nodejs.jpeg' />
                    <Skill title='express' imgSrc='/skills/express.jpeg' /> 
                    <Skill title='mongodb' imgSrc='/skills/mongodb.png' />
                    <Skill title='nextjs' imgSrc='/skills/nextjs.png' />
                    <Skill title='python' imgSrc='/skills/python.jpeg' />
                    <Skill title='git' imgSrc='/skills/git.png' />
                    <Skill title='docker' imgSrc='/skills/docker.png' />
                    <Skill title='linux' imgSrc='/skills/linux.jpeg' />
                </SkillGroup>
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Skills