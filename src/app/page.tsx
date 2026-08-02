import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1>Онлайн навчальник веброзробки</h1>

          <p className={styles.description}>
            Практичні уроки Git, HTML, CSS та сучасної розробки.
          </p>

          <Link href="/tutorials/git" className={styles.card}>
            Почати Git
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/cover.webp"
            alt="Онлайн навчальник веброзробки"
            width={1376}
            height={768}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
