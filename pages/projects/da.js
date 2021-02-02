import Container from '../../components/container'
import LinkToProjects from '../../components/linkToProjects'
import ProjectReplit from '../../components/projectReplit'


const DA = () => {
    return (
        <Container pageTitle='DA projects' headerTitle='DA projects' headerDescription='(numpy, pandas, matplotlib, seaborn)'>
            <LinkToProjects />
            <ProjectReplit title='Mean Var Std Calculator' description='Calculate the mean, variance, standard deviation, max, min, and sum in a 3 x 3 matrix.' />
            <ProjectReplit title='Demographic Data Analyzer' description='Analyze the data according to the given requirements.' />
            <ProjectReplit title='Medical Data Visualizer' description='Plot bar graphs and heat maps from the data according to the given request.' note='Note: If replit console goes wrong, see image in /img folder to see output.' />
            <ProjectReplit title='Page View Time Series Visualizer' description='Plot graphs from data that is the daily views of a web page.' note='Note: If replit console goes wrong, see image in /img folder to see output.' />
            <ProjectReplit title='Sea Level Predictor' description='Graph and predict sea level rise from data.' note='Note: If replit console goes wrong, see image in /img folder to see output.' />
            <LinkToProjects />
        </Container>
    )
}

export default DA