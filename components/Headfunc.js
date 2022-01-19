import Head from 'next/head'

export default function Headfunc({title}){
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
    );
}