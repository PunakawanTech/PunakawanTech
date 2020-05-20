import Head from "next/head";

export default function Home({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />

            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            
            <meta name="description" content="IT Solustions based on surabaya. We develop with the new technology, Give you the best choices.
                Business Intelligence, Big Data, Artificial Intelligence, Web Development, Mobile Development and many more. We give you the best choices at its best."/>
            <meta name="author" content="PT. Elang Mitra Solusi Teknologi Telematika Surabaya"/>
            <meta name="keywords" content="IT Solutions, Elang Mitra, EMSTTS, Big Data, Business Intelligence, Artificial Intelligence, Surabaya IT Solutions, STTS,
                Elang Mitra Teknologi Telematika Surabaya, Eagle Tech Solutions, Indonesia IT Solutions, Web Development, Android Development, Business Development,
                E-Commerce Apps Development, iOS Development, surabaya developer, indonesia developer"/>
        </Head>
    );
}
