import Head from 'next/head'

const Title = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/title.ico" />
        </Head>
    )
}

export default Title