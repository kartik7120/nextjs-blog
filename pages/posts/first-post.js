import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout"
import Head from "next/head";
import Script from "next/script";
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <h3>
                <Link href="/Anime/PSYCHO-PASS"><a style={{ color: "red" }}>PSYCHO-PASS</a></Link>
            </h3>
            <Image src="/images/profile.jpg" width={144} height={144} alt="Akane Tsunemori" />
        </Layout>
    )
}