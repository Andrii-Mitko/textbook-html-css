'use client';

import { useProgress } from '@/components/Providers/ProgressProvider';
import css from './LessonComplete.module.css';

interface LessonCompleteProps {
  tutorialId: string;
  lessonId: string;
}

export default function LessonComplete({ tutorialId, lessonId }: LessonCompleteProps) {
  const { isAuthenticated, isCompleted, markCompleted } = useProgress();

  // Гостям кнопку не показуємо
  if (!isAuthenticated) return null;

  const done = isCompleted(tutorialId, lessonId);

  return (
    <button
      className={css.button}
      type="button"
      disabled={done}
      onClick={() => markCompleted(tutorialId, lessonId)}
    >
      {done ? 'Урок пройдено ✓' : 'Позначити як пройдене'}
    </button>
  );
}
