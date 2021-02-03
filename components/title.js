import Head from 'next/head'
export default ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/title.ico" />
        </Head>
    )
}