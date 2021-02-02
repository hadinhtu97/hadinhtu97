import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import ProjectReplit from '../../components/projectReplit'


const PT = () => {
    return (
        <Container pageTitle='PT projects' headerTitle='PT projects' headerDescription='(python hash, socket)'>
            <LinkToProjects />
            <ProjectReplit title='Port Scanner' description='Finds the open ports of a URL or an IP.' />
            <ProjectReplit title='Password Cracker' description='Compares a password with a sha1 encrypted password.' />
            <LinkToProjects />
        </Container>
    )
}

export default PT