import Link from "next/link";
import styles from "./LessonNavigation.module.css";
import type { Lesson } from "@/data/types";

interface LessonNavigationProps {
  tutorialId: string;
  previous?: Lesson;
  next?: Lesson;
}

export default function LessonNavigation({
  tutorialId,
  previous,
  next,
}: LessonNavigationProps) {
  return (
    <nav className={styles.navigation}>
      {previous ? (
        <Link
          href={`/tutorials/${tutorialId}/${previous.id}`}
          className={styles.link}
        >
          ← {previous.title}
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/tutorials/${tutorialId}/${next.id}`}
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
