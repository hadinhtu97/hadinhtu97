import styles from './Container.module.css'

import Title from './Title'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Container = ({ pageTitle, headerTitle, headerDescription, children }) => {
    return (
        <div className={styles.container}>
            <Title title={pageTitle}></Title>
            <Header title={headerTitle} description={headerDescription}></Header>
            <Main>{children}</Main>
            <Footer></Footer>
        </div>
    )
}

export default Container