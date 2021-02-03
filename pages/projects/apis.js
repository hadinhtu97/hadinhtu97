import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import Api from '../../components/api'

import styles from '../../styles/apis.module.css'

const APIS = () => {
    return (
        <Container pageTitle='API projects' headerTitle='API projects' headerDescription='(Nodejs, Express, Mongoose, Chai, Mocha,..)'>
            <LinkToProjects />
            <section className={styles.apis}>
                <h3>List of api has been added to this website :</h3>
                <ul>
                    <li><Api apiName='timestamp' githubName='timestamp' description={['GET api/timestamp', 'GET api/timestamp/:date']} /></li>
                    <li><Api apiName='whoami' githubName='request-header-parser' description={['GET api/whoami']} /></li>
                    <li><Api apiName='shorturl/1' githubName='shortener' description={['GET api/shorturl/:shrot_url','POST api/shorturl/new']} /></li>
                </ul>
            </section>
            <LinkToProjects />
        </Container>
    )
}

export default APIS