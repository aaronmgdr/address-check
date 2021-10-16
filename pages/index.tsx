import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Demo from "../src/components/Demo"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Celo Address Check (demo)</title>
        <meta name="description" content="Don't lose funds, ✔︎ the address" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" rel="stylesheet"/>
      </Head>
      <nav className={styles.nav}><a href={"https://github.com/aaronmgdr/address-check"}>Readme</a></nav>
      <main className={styles.main}>
        <h1>Address Checker</h1>
        <p>Warns when address belongs to a smart contract, when it has no known tx on the celo network, and if there is anything know about it on Ethereum</p>
        <Demo />
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Demonstrative only. No guarantees.
        </a>
      </footer>
    </div>
  )
}

export default Home
