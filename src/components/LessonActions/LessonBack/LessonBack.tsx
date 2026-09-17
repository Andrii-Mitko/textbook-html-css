import Link from "next/link";
import styles from "./LessonBack.module.css";

interface LessonBackProps {
  tutorialId: string;
}

export default function LessonBack({ tutorialId }: LessonBackProps) {
  return (
    <Link href={`/tutorials/${tutorialId}`} className={styles.back}>
      ← Назад
    </Link>
  );
}
