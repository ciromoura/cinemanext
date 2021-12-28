import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'

export default function About({ author }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CinemaNext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre o projeto
        </h1>

        <p>Criado vendo a video aula: https://www.youtube.com/watch?v=xjrDEZQ5LnA </p>

        <a href="https://ciromoura.com.br"> {author} </a>

      </main>

    </div>
  )
}


export async function getStaticProps() {


  return {
    props: {
      author: "Ciro Moura"
    }
  };
}
