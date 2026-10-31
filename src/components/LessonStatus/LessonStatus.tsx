'use client';

import { useProgress } from '@/components/Providers/ProgressProvider';
import css from './LessonStatus.module.css';

interface LessonStatusProps {
  tutorialId: string;
  lessonId: string;
}

export default function LessonStatus({ tutorialId, lessonId }: LessonStatusProps) {
  const { isCompleted } = useProgress();

  if (!isCompleted(tutorialId, lessonId)) return null;

  return <span className={css.badge}>✓ Пройдено</span>;
}
