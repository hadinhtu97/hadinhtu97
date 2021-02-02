import Container from '../../components/container'
import ProjectCodePen from '../../components/projectCodepen'
import LinkToProjects from '../../components/linkToProjects'

const RWD = () => {
    return (
        <Container pageTitle='RWD projects' headerTitle='RWD projects' headerDescription='(html, css)'> 
            <LinkToProjects />
            <ProjectCodePen title='Tribute Page' hash='jOrKRdq' description='A memorial page for a famous deceased.' />
            <ProjectCodePen title='Survey Form' hash='yLJqXMR' description='A page that collects user input.' />
            <ProjectCodePen title='Product Landing Page' hash='jOrpZrM' description='An upcoming product launch page.' />
            <ProjectCodePen title='Technical Documentation Page' hash='qBNMyEv' description='A documentary page on an academic topic.' />
            <ProjectCodePen title='Personal Portfolio Page' hash='RwRYeKE' description="A page that introduces an individual's portfolio." />
            <LinkToProjects />
        </Container>
    )
}

export default RWD