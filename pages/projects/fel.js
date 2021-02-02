import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import ProjectCodePen from '../../components/projectCodepen'

const FEL = () => {
    return (
        <Container pageTitle='FEL projects' headerTitle='FEL projects' headerDescription='(bootstrap, jquery, react)'>
            <LinkToProjects />
            <ProjectCodePen title='Random Quote Machine' hash='VwjoGap' description='Generate random quotes and tweet it.' />
            <ProjectCodePen title='Markdown Previewer' hash='VwjoEzV' description='Compile markdown language into html.' />
            <ProjectCodePen title='Drum Machine' hash='YzGKNQz' description='An online drum machine.' />
            <ProjectCodePen title='Javascript Calculator' hash='NWRKJQX' description='Perform simple calculations on the web.' />
            <ProjectCodePen title='255 Clock' hash='rNMBXyE' description="An automatic timer between work and rest times." />
            <LinkToProjects />
        </Container>
    )
}

export default FEL