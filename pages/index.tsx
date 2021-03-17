import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { Nav } from "./components/_Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Pedro Lucinda </title>
      </Head>
      <Nav />
    </div>
  );
}
