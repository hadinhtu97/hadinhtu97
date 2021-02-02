import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import ProjectReplit from '../../components/projectReplit'


const PY = () => {
    return (
        <Container pageTitle='PY projects' headerTitle='PY projects' headerDescription='(python)'>
            <LinkToProjects />
            <ProjectReplit title='Arithmetic Formatter' description='Converting arrays to strings is vertical calculations.' />
            <ProjectReplit title='Time Calculator' description='Determines the sum of two strings as time, finds the number of elapsed time.' />
            <ProjectReplit title='Budget app' description='Simple budget management by deposit, withdraw, transfer.' />
            <ProjectReplit title='Poligon Area Calculator' description='Create and draw rectangular and square class, compare their areas.' />
            <ProjectReplit title='Probability Calculator' description='Determine the probability of pulling the ball out of the hat.' />
            <LinkToProjects />
        </Container>
    )
}

export default PY