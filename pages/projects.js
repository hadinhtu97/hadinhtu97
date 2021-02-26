import Container from '../components/container'
import styles from '../styles/projects.module.css'
import LinkToHome from '../components/linkToHome'

const Article = ({ projectName, projectTechs, projectDescription, projectView, projectSouce }) => {
    return (
        <tr>
            <td class={styles.projectName}>{projectName}</td>
            <td class={styles.projectTechs}>{projectTechs.map((tech, i) => <li key={i}>{tech}</li>)}</td>
            <td class={styles.projectDescription}>{projectDescription}</td>
            <td class={styles.projectLinks}>
                <a href={projectView} target='_blank'>View</a>
                <a href={projectSouce} target='_blank'>Souce</a>
            </td>
        </tr>
    )
}

const Projects = () => {
    return (
        <Container pageTitle='Projects' headerTitle='Projects'>
            <LinkToHome />
            <section className={styles.projects}>
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Use</th>
                        <th>Description</th>
                        <th>Souce</th>
                    </tr>
                    <tr>
                        <th rowSpan={15} className={styles.typeColumn}>Front End</th>
                    </tr>
                    <Article projectName='Tribute Page'
                        projectTechs={['Html', 'Css']}
                        projectDescription='A memorial page for a famous deceased'
                        projectView='https://codepen.io/hadinhtu97/pen/jOrKRdq'
                        projectSouce='https://github.com/hadinhtu97/tribute-page'
                    />
                    <Article projectName='Survey Form'
                        projectTechs={['Html', 'Css']}
                        projectDescription='A page that collects user input'
                        projectView='https://codepen.io/hadinhtu97/pen/yLJqXMR'
                        projectSouce='https://github.com/hadinhtu97/suvery-form'
                    />
                    <Article projectName='Product Landing Page'
                        projectTechs={['Html', 'Css']}
                        projectDescription='An upcoming product launch page'
                        projectView='https://codepen.io/hadinhtu97/pen/jOrpZrM'
                        projectSouce='https://github.com/hadinhtu97/product-landing-page'
                    />
                    <Article projectName='Technical Documentation Page'
                        projectTechs={['Html', 'Css']}
                        projectDescription='A documentary page on an academic topic'
                        projectView='https://codepen.io/hadinhtu97/pen/qBNMyEv'
                        projectSouce='https://github.com/hadinhtu97/technical-documentation-page'
                    />
                    <Article projectName='Personal Portfolio Page'
                        projectTechs={['Html', 'Css']}
                        projectDescription="A page that introduces an individual's portfolio"
                        projectView='https://codepen.io/hadinhtu97/pen/RwRYeKE'
                        projectSouce='https://github.com/hadinhtu97/personal-portfolio-webpage'
                    />
                    <Article projectName='Random Quote Machine'
                        projectTechs={['React']}
                        projectDescription="Generate random quotes and tweet it"
                        projectView='https://codepen.io/hadinhtu97/pen/VwjoGap'
                        projectSouce='https://github.com/hadinhtu97/random-quote-machine'
                    />
                    <Article projectName='Markdown Previewer'
                        projectTechs={['React']}
                        projectDescription="Compile markdown language into Html"
                        projectView='https://codepen.io/hadinhtu97/pen/VwjoEzV'
                        projectSouce='https://github.com/hadinhtu97/markdown-previewer'
                    />
                    <Article projectName='Drum Machine'
                        projectTechs={['Javascript']}
                        projectDescription="An online drum machine"
                        projectView='https://codepen.io/hadinhtu97/pen/YzGKNQz'
                        projectSouce='https://github.com/hadinhtu97/drum-machine'
                    />
                    <Article projectName='Javascript Calculator'
                        projectTechs={['React']}
                        projectDescription="Perform simple calculations on the web"
                        projectView='https://codepen.io/hadinhtu97/pen/NWRKJQX'
                        projectSouce='https://github.com/hadinhtu97/javascript-calculator'
                    />
                    <Article projectName='255 Clock'
                        projectTechs={['React']}
                        projectDescription="An automatic timer between work and rest times"
                        projectView='https://codepen.io/hadinhtu97/pen/rNMBXyE'
                        projectSouce='https://github.com/hadinhtu97/255-clock'
                    />
                    <Article projectName='Bar Chart'
                        projectTechs={['D3']}
                        projectDescription="Display data in a bar graph"
                        projectView='https://codepen.io/hadinhtu97/pen/KKgdgey'
                        projectSouce='https://github.com/hadinhtu97/bar-chart'
                    />
                    <Article projectName='Scatterplot Graph'
                        projectTechs={['D3']}
                        projectDescription="Display data as a scatter graph"
                        projectView='https://codepen.io/hadinhtu97/pen/YzGyBqw'
                        projectSouce='https://github.com/hadinhtu97/scatterplot-graph'
                    />
                    <Article projectName='Heat Map'
                        projectTechs={['D3']}
                        projectDescription="Display data as a heat map"
                        projectView='https://codepen.io/hadinhtu97/pen/ExgVBwN'
                        projectSouce='https://github.com/hadinhtu97/heat-map'
                    />
                    <Article projectName='Treemap Diagram'
                        projectTechs={['D3']}
                        projectDescription="Display data as a treemap"
                        projectView='https://codepen.io/hadinhtu97/pen/ZEpQaBz'
                        projectSouce='https://github.com/hadinhtu97/treemap-diagram'
                    />
                    <tr>
                        <th rowSpan={13} className={styles.typeColumn}>Back End</th>
                    </tr>
                    <Article projectName='Timestamp'
                        projectTechs={['Node', 'Express']}
                        projectDescription="Backend APIs convert time to unix timestamp"
                        projectView='https://repl.it/@hadinhtu97/timestamp'
                        projectSouce='https://github.com/hadinhtu97/timestamp'
                    />
                    <Article projectName='Request Header Parser'
                        projectTechs={['Node', 'Express']}
                        projectDescription="Backend APIs show information of user"
                        projectView='https://repl.it/@hadinhtu97/request-header-parser'
                        projectSouce='https://github.com/hadinhtu97/request-header-parser'
                    />
                    <Article projectName='Shortener'
                        projectTechs={['Node', 'Express']}
                        projectDescription="Backend APIs store url and make it shorter"
                        projectView='https://repl.it/@hadinhtu97/shortener'
                        projectSouce='https://github.com/hadinhtu97/shortener'
                    />
                    <Article projectName='Exercise Tracker'
                        projectTechs={['Node', 'Express', 'Mongoose']}
                        projectDescription="Backend APIs manage exercise of user"
                        projectView='https://repl.it/@hadinhtu97/exercise-tracker'
                        projectSouce='https://github.com/hadinhtu97/exercise-tracker'
                    />
                    <Article projectName='File Metadata'
                        projectTechs={['Node', 'Express']}
                        projectDescription="Backend APIs show information of uploaded files"
                        projectView='https://repl.it/@hadinhtu97/file-metadata'
                        projectSouce='https://github.com/hadinhtu97/file-metadata'
                    />
                    <Article projectName='Metric Imperial Converter'
                        projectTechs={['Node', 'Express', 'Chai', 'Mocha']}
                        projectDescription="Backend APIs convert between units of measure"
                        projectView='https://repl.it/@hadinhtu97/metric-imperial-converter'
                        projectSouce='https://github.com/hadinhtu97/metric-imperial-converter'
                    />
                    <Article projectName='Issue Tracker'
                        projectTechs={['Node', 'Express', 'Mongoose', 'Chai', 'Mocha']}
                        projectDescription="Backend APIs manage issues"
                        projectView='https://repl.it/@hadinhtu97/issue-tracker'
                        projectSouce='https://github.com/hadinhtu97/issue-tracker'
                    />
                    <Article projectName='Personal Library'
                        projectTechs={['Node', 'Express', 'Mongoose', 'Chai', 'Mocha']}
                        projectDescription="Backend APIs manage books in library"
                        projectView='https://repl.it/@hadinhtu97/personal-library'
                        projectSouce='https://github.com/hadinhtu97/personal-library'
                    />
                    <Article projectName='American British Translator'
                        projectTechs={['Node', 'Express', 'Chai', 'Mocha']}
                        projectDescription="Backend APIs translate between american and british"
                        projectView='https://repl.it/@hadinhtu97/american-british-translator'
                        projectSouce='https://github.com/hadinhtu97/american-british-translator'
                    />
                    <Article projectName='Sudoku Solver'
                        projectTechs={['Node', 'Express', 'Chai', 'Mocha']}
                        projectDescription="Backend APIs solve sudoku game"
                        projectView='https://repl.it/@hadinhtu97/sudoku-solver'
                        projectSouce='https://github.com/hadinhtu97/sudoku-solver'
                    />
                    <Article projectName='Stock Price Checker'
                        projectTechs={['Node', 'Express', 'Mongoose', 'Chai', 'Mocha', 'Helmet']}
                        projectDescription="Backend APIs check the price of given stock"
                        projectView='https://repl.it/@hadinhtu97/stock-price-checker'
                        projectSouce='https://github.com/hadinhtu97/stock-price-checker'
                    />
                    <Article projectName='Anonymous Message Board'
                        projectTechs={['Node', 'Express', 'Mongoose', 'Chai', 'Mocha', 'Helmet']}
                        projectDescription="Backend APIs manage message on board without login"
                        projectView='https://repl.it/@hadinhtu97/anonymous-message-board'
                        projectSouce='https://github.com/hadinhtu97/anonymous-message-board'
                    />
                    <tr>
                        <th rowSpan={13} className={styles.typeColumn}>Python</th>
                    </tr>
                    <Article projectName='Arithmetic Formatter'
                        projectTechs={['Python']}
                        projectDescription="Receives a list of strings that are arithmetic problems and returns the problems arranged vertically and side-by-side"
                        projectView='https://repl.it/@hadinhtu97/arithmetic-formatter'
                        projectSouce='https://github.com/hadinhtu97/arithmetic-formatter'
                    />
                    <Article projectName='Time Calculator'
                        projectTechs={['Python']}
                        projectDescription="Add a duration to a start time and return the result"
                        projectView='https://repl.it/@hadinhtu97/time-calculator'
                        projectSouce='https://github.com/hadinhtu97/time-calculator'
                    />
                    <Article projectName='Budget App'
                        projectTechs={['Python']}
                        projectDescription='A "Category" class that can be used to create different budget categories'
                        projectView='https://repl.it/@hadinhtu97/budget-app'
                        projectSouce='https://github.com/hadinhtu97/budget-app'
                    />
                    <Article projectName='Poligon Area Calculator'
                        projectTechs={['Python']}
                        projectDescription=" Rectangle class and a Square class"
                        projectView='https://repl.it/@hadinhtu97/poligon-area-calculator'
                        projectSouce='https://github.com/hadinhtu97/poligon-area-calculator'
                    />
                    <Article projectName='Probability Calculator'
                        projectTechs={['Python']}
                        projectDescription="Determine the approximate probability of drawing certain balls randomly from a hat"
                        projectView='https://repl.it/@hadinhtu97/probability-calculator'
                        projectSouce='https://github.com/hadinhtu97/probability-calculator'
                    />
                    <Article projectName='MVS calculator'
                        projectTechs={['Numpy']}
                        projectDescription="Calculator the mean, variance, and standard deviation of the rows, columns, and elements in a 3 x 3 matrix"
                        projectView='https://repl.it/@hadinhtu97/mean-var-std-calculator'
                        projectSouce='https://github.com/hadinhtu97/mean-var-std-calculator'
                    />
                    <Article projectName='Demographic Data Analyzer'
                        projectTechs={['Pandas']}
                        projectDescription="Analyze demographic data"
                        projectView='https://repl.it/@hadinhtu97/demographic-data-analyzer'
                        projectSouce='https://github.com/hadinhtu97/demographic-data-analyzer'
                    />
                    <Article projectName='Medical Data Visualizer'
                        projectTechs={['Numpy', 'Pandas', 'Seaborn', 'Matplotlib']}
                        projectDescription="Visualize and make calculations from medical examination data"
                        projectView='https://repl.it/@hadinhtu97/medical-data-visualizer'
                        projectSouce='https://github.com/hadinhtu97/medical-data-visualizer'
                    />
                    <Article projectName='Page View Time Series Visualizer'
                        projectTechs={['Pandas', 'Matplotlib', 'Seaborn']}
                        projectDescription="Visualize time series data using a line chart, bar chart, and box plots"
                        projectView='https://repl.it/@hadinhtu97/page-view-time-series-visualizer'
                        projectSouce='https://github.com/hadinhtu97/page-view-time-series-visualizer'
                    />
                    <Article projectName='Sea Level Predictor'
                        projectTechs={['Pandas', 'Matplotlib']}
                        projectDescription="Analyze a dataset of the global average sea level and predict the sea level change"
                        projectView='https://repl.it/@hadinhtu97/sea-level-predictor'
                        projectSouce='https://github.com/hadinhtu97/sea-level-predictor'
                    />
                    <Article projectName='Port Scanner'
                        projectTechs={['Socket']}
                        projectDescription="A port scanner using Python"
                        projectView='https://repl.it/@hadinhtu97/port-scanner'
                        projectSouce='https://github.com/hadinhtu97/port-scanner'
                    />
                    <Article projectName='Password Cracker'
                        projectTechs={['Python']}
                        projectDescription="A password cracker to figure out passwords that were hashed using SHA-1"
                        projectView='https://repl.it/@hadinhtu97/password-cracker'
                        projectSouce='https://github.com/hadinhtu97/password-cracker'
                    />
                </table>
            </section>
            <LinkToHome />
        </Container>
    )
}

export default Projects