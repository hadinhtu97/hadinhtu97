import Container from '../components/container'
import styles from '../styles/About.module.css'
import LinkToHome from '../components/linkToHome'

const About = () => {
    return (
        <Container pageTitle='About' headerTitle='About'>
            <LinkToHome></LinkToHome>

            <div className={styles.about}>
                <p> My full name is <span className={styles.blue}> Ha Dinh Tu </span> . Currently, I am living in Ha Noi. </p>
                <p>
                    In hight school, I had studied Basic and Pascal, I was interested in programming.
                    Therefore, I attended HUST college in 2015 , majoring in Information Technology, I learned C and C++ there here and web programming.
                    At my 3th year in college, a few problems happened and I dropped out of college.
                </p>
                <p>
                    After that, I went to many different jobs, some of which were really interesting.
                    But I completely left the tech world, and I missed a lot about programming.
                    I want a more stable career, I decided to go back to learning programming.
                </p>
                <p>
                    I have been self-taught with many free online resources.
                    One of them is <a href='https://www.freecodecamp.org' target='_blank'><span className={styles.blue}>freecodecamp</span></a>, thank to their team, for the tutorials that have helped me a lot, and I also got some of their certifications. <br />
                </p>
                <p>
                    Currently, I am working at a technology company in Vietnam and improving my knowledge to develop my skills. <br />
                </p>
            </div>

            <LinkToHome></LinkToHome>
        </Container >
    )
}

export default About