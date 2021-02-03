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
                <Api apiName='convert?input' githubName='metric-imperial-converter' description={['GET api/convert?input=']} />
                <Api apiName='issues/test' githubName='issue-tracker' description={['GET api/issues/[project]', 'POST api/issues/[project]', 'PUT api/issues/[project]', 'DELETE api/issues/[project]']} />
                <Api apiName='books' githubName='personal-library' description={['GET api/books', 'POST api/books', 'DELETE api/books', 'GET api/books/[id]', 'POST api/books/[id]', 'DELETE api/books/[id]']} />
                <Api apiName='translate' githubName='american-british-translator' description={['POST api/translate']} />
                <Api apiName='stock-prices' githubName='stock-price-checker' description={['GET /api/stock-prices']} />
                <Api apiName='threads/test' githubName='anonymous-message-board' description={['GET /api/threads/[board]', 'POST /api/threads/[board]', 'PUT /api/threads/[board]', 'DELETE /api/threads/[board]']} />
                <Api apiName='replies/test' githubName='anonymous-message-board' description={['GET /api/replies/[board]', 'POST /api/replies/[board]', 'PUT /api/replies/[board]', 'DELETE /api/replies/[board]']} />
            </section>
            <LinkToProjects />
        </Container>
    )
}

export default APIS