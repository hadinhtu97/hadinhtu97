import Container from '../components/container'
import LinkToHome from '../components/linkToHome'

import styles from '../styles/certifications.module.css'

const Certification = ({ cerTitle, imgSrc, cerDescription, cerLink }) => {
    return (
        <article className={styles.certification}>
            <h3 className={styles.title}>{cerTitle}</h3>
            <p className={styles.description}>{cerDescription}</p>
            <a href={cerLink} className={styles.link} target='_blank'>
                <img className={styles.img} src={imgSrc} title={cerTitle} />
            </a>
        </article>
    )
}

const Certifications = () => {
    return (
        <Container pageTitle='Certifications' headerTitle='Certifications'>
            <LinkToHome></LinkToHome>

            <section className={styles.certifications}>
                <Certification cerTitle='Responsive Web Design'
                    imgSrc='/images/certifications/rwd.png'
                    cerDescription='(Basic HTML, Basic CSS, Visual Design, Accessibility, CSS Flexbox, CSS Gird)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/responsive-web-design'>
                </Certification>

                <Certification cerTitle='Java Algorithms and Data Structures'
                    imgSrc='/images/certifications/jads.png'
                    cerDescription='(Basic Jascript, ES6, Regular Expression, Data Structures, Algorithm Scripting, Object Oriented)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/javascript-algorithms-and-data-structures'>
                </Certification>

                <Certification cerTitle='Front End Libraries'
                    imgSrc='/images/certifications/fel.png'
                    cerDescription='(Bootstrap, Sass, React, Redux)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/front-end-libraries'>
                </Certification>

                <Certification cerTitle='Data Visualization'
                    imgSrc='/images/certifications/dv.png'
                    cerDescription='(D3js, JSON APIs, Ajax)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/data-visualization'>
                </Certification>

                <Certification cerTitle='APIs and Microservices'
                    imgSrc='/images/certifications/rwd.png'
                    cerDescription='(Npm, Basic NodeJS and Express, MongoDB and Mongoose)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/apis-and-microservices'>
                </Certification>

                <Certification cerTitle='Quality Assurance'
                    imgSrc='/images/certifications/qa.png'
                    cerDescription='(Testing with ChaiJS and MochaJS, Advanced Node and Express)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/quality-assurance-v7'>
                </Certification>

                <Certification cerTitle='Information Security'
                    imgSrc='/images/certifications/is.png'
                    cerDescription='(HelmetJS, Penetration Testing with python)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/information-security-v7'>
                </Certification>

                <Certification cerTitle='Legacy QA and Information Security'
                    imgSrc='/images/certifications/lisqa.png'
                    cerDescription='(Achieved when Quality Assurance and Information Security are achieved)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/information-security-and-quality-assurance'>
                </Certification>

                <Certification cerTitle='Full Stack'
                    imgSrc='/images/certifications/fs.png'
                    cerDescription='(Achieved when all of the above are obtained)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/full-stack'>
                </Certification>

                <Certification cerTitle='Scientific Computing with Python'
                    imgSrc='/images/certifications/scp.png'
                    cerDescription='(Basic Python)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/scientific-computing-with-python-v7'>
                </Certification>

                <Certification cerTitle='Data Analysis with Python'
                    imgSrc='/images/certifications/dap.png'
                    cerDescription='(Jupyter Notebook, Numpy, Pandas, Matplotlib, Seaborn)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/data-analysis-with-python-v7'>
                </Certification>
            </section>

            <LinkToHome></LinkToHome>
        </Container>
    )
}

export default Certifications