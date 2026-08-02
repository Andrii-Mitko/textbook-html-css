import Link from "next/link";
import { gitTutorial } from "@/data";
import styles from "./page.module.css";

export default function GitPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Навчальник Git</h1>

      <p className={styles.description}>
        Вивчення системи контролю версій Git від основ до роботи з віддаленими
        репозиторіями.
      </p>

      {gitTutorial.map((section) => (
        <section key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>

          <ul className={styles.list}>
            {section.lessons.map((lesson) => (
              <li key={lesson.id} className={styles.item}>
                <Link
                  href={`/tutorials/git/${lesson.id}`}
                  className={styles.card}
                >
                  <h3>{lesson.title}</h3>

                  <p>{lesson.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
