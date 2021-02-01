import styles from './container.module.css'

import Title from './title'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Container = ({ pageTitle, headerTitle, headerDescription, children }) => {
    console.log(pageTitle)
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