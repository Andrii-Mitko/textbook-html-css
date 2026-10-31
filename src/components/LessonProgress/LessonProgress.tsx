'use client';

import styles from './LessonProgress.module.css';
import { useProgress } from '@/components/Providers/ProgressProvider';

interface LessonProgressProps {
  tutorialId: string;
  current: number;
  total: number;
}

export default function LessonProgress({ tutorialId, current, total }: LessonProgressProps) {
  const { isAuthenticated, countCompleted } = useProgress();

  const completedCount = countCompleted(tutorialId);

  // Для гостя лишається позиція в курсі, для користувача - кількість пройдених уроків
  const percent = Math.round(((isAuthenticated ? completedCount : current) / total) * 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        Урок {current} із {total}
        {isAuthenticated && ` · Пройдено: ${completedCount}`}
      </div>

      <div className={styles.progress}>
        <div className={styles.line} style={{ width: `${percent}%` }} />
      </div>

      <div className={styles.percent}>{percent}%</div>
    </div>
  );
}
