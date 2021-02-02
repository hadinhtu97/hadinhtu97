import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import ProjectCodePen from '../../components/projectCodepen'


const DV = () => {
    return (
        <Container pageTitle='DV projects' headerTitle='DV projects' headerDescription='(D3js, JSON APIs, Ajax)'>
            <LinkToProjects />
            <ProjectCodePen title='Bar Chart' hash='KKgdgey' description='Display data in a bar graph.' />
            <ProjectCodePen title='Scatterplot Graph' hash='YzGyBqw' description='Display data as a scatter graph.' />
            <ProjectCodePen title='Heat Map' hash='ExgVBwN' description='Display data as a heat map.' />
            <ProjectCodePen title='Treemap Diagram' hash='ZEpQaBz' description='Display data as a treemap.' />
            <LinkToProjects />
        </Container>
    )
}

export default DV