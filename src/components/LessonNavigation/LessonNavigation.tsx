import Link from "next/link";

import styles from "./LessonNavigation.module.css";
import { Lesson } from "@/data/git/git";

interface LessonNavigationProps {
  previous?: Lesson;
  next?: Lesson;
}

export default function LessonNavigation({
  previous,
  next,
}: LessonNavigationProps) {
  return (
    <nav className={styles.navigation}>
      {previous ? (
        <Link href={`/tutorials/git/${previous.id}`} className={styles.link}>
          ← {previous.title}
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/tutorials/git/${next.id}`}
          className={`${styles.link} ${styles.next}`}
        >
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
