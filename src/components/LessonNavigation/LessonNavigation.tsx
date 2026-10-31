'use client';

import Link from 'next/link';
import styles from './LessonNavigation.module.css';
import type { Lesson } from '@/data/types';
import { useProgress } from '@/components/Providers/ProgressProvider';

interface LessonNavigationProps {
  tutorialId: string;
  lessonId: string;
  previous?: Lesson;
  next?: Lesson;
}

export default function LessonNavigation({
  tutorialId,
  lessonId,
  previous,
  next,
}: LessonNavigationProps) {
  const { markCompleted } = useProgress();

  return (
    <nav className={styles.navigation}>
      {previous ? (
        <Link href={`/tutorials/${tutorialId}/${previous.id}`} className={styles.link}>
          ← {previous.title}
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/tutorials/${tutorialId}/${next.id}`}
          className={`${styles.link} ${styles.next}`}
          onClick={() => markCompleted(tutorialId, lessonId)}
        >
          {next.title} →
        </Link>
      ) : (
        <Link
          href={`/tutorials/${tutorialId}`}
          className={`${styles.link} ${styles.next}`}
          onClick={() => markCompleted(tutorialId, lessonId)}
        >
          Завершити ✓
        </Link>
      )}
    </nav>
  );
}
