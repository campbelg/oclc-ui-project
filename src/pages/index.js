import Head from "next/head"
import styles from "../../styles/Home.module.css"
import InstitutionRecordList from "../components/InstitutionRecordList";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>OCLC Interview Task</title>
                <link rel="icon"
                      href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to<br/><a href="https://nextjs.org">OCLC's List Keeper</a>
                </h1>
                <InstitutionRecordList/>
            </main>
        </div>
    )
}
