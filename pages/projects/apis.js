import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import Api from '../../components/api'

import styles from '../../styles/apis.module.css'

const APIS = () => {
    return (
        <Container pageTitle='API projects' headerTitle='API projects' headerDescription='(Nodejs, Express, Mongoose, Chai, Mocha,..)'>
            <LinkToProjects />
            <section className={styles.apis}>
                <Api apiName='timestamp' githubName='timestamp' description={['GET api/timestamp', 'GET api/timestamp/[date]']} />
                <Api apiName='whoami' githubName='request-header-parser' description={['GET api/whoami']} />
                <Api apiName='shorturl/1' githubName='shortener' description={['GET api/shorturl/[shrot_url]', 'POST api/shorturl/new']} />
                <Api apiName='exercise/users' githubName='exercise-tracker' description={['GET api/exercise/users', 'GET api/exercise/log?userId', 'POST api/exercise/add', 'POST api/exercise/new-user']} />
                <Api apiName='convert?input=1l' githubName='metric-imperial-converter' description={['GET api/convert?input=']} />
                <Api apiName='issues/test' githubName='issue-tracker' description={['GET api/issues/[project]', 'POST api/issues/[project]', 'PUT api/issues/[project]', 'DELETE api/issues/[project]']} />
                <Api apiName='books' githubName='personal-library' description={['GET api/books', 'POST api/books', 'DELETE api/books', 'GET api/books/[id]', 'POST api/books/[id]', 'DELETE api/books/[id]']} />
            </section>
            <LinkToProjects />
        </Container>
    )
}

export default APIS