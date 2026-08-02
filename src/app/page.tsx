import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Онлайн навчальник веброзробки</h1>

      <p className={styles.description}>
        Практичні уроки Git, HTML, CSS та сучасної розробки.
      </p>

      <Link href="/tutorials/git" className={styles.card}>
        Почати Git
      </Link>
    </section>
  );
}
