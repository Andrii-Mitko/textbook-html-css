import styles from "./LessonProgress.module.css";

interface LessonProgressProps {
  current: number;
  total: number;
}

export default function LessonProgress({
  current,
  total,
}: LessonProgressProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        Урок {current} із {total}
      </div>

      <div className={styles.progress}>
        <div className={styles.line} style={{ width: `${percent}%` }} />
      </div>

      <div className={styles.percent}>{percent}%</div>
    </div>
  );
}
