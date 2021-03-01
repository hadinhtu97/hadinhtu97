import Container from '../components/Container'
import styles from '../styles/About.module.css'
import LinkToHome from '../components/LinkToHome'

const About = () => {
    return (
        <Container pageTitle='About'>
            <LinkToHome />

            <section className={styles.about}>
                <p> My full name is <span className={styles.color}> Ha Dinh Tu </span>, I was born in 1997. Currently, I live and work in Hanoi. </p>
                <p>
                    I got into the tech world quite late (I think) compared to my peers. At the end of 2020, after going through many different jobs, I want a job that is stable and more attractive to myself.
                    I recall my enthusiasm for computers when I was in high school, that I always enjoyed programming.
                </p>
                <p>
                    After that, I taught myself through a variety of free online resources. To be honest, this process had certain difficulties, especially for my discipline.
                    But, my emotions sublimated when I figured out an algorithm to solve a problem I had been struggling with all day, or burst into laughter knowing that the task needed only one line of code to solve, meanwhile I have written down a complete library.
                </p>
                <p>
                    My goal is to become a software engineer with a deep technical understanding and optimal user experience.
                    I know that I have only taken the first few steps on this road and still have many difficulties ahead, but I am always ready to lift my feet and my hands to go to the end.
                </p>
                <p className={styles.link}>
                    <a href='https://drive.google.com/file/d/17SJCMGxBqtCb_J0t7Bs7ez4bgsPKH59T/view?usp=sharing' target='_blank'>Curriculum Vitae</a>
                </p>
                <p className={styles.link}>
                    <a href='https://drive.google.com/file/d/19wT4oaOkol5sHD96rTYAoQZPer22pKsc/view?usp=sharing' target='_blank'>Cover Letter</a>
                </p>
            </section>

            <LinkToHome />
        </Container >
    )
}

export default About