import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllLessonParams,
  getLessonById,
  getNextLesson,
  getPreviousLesson,
  getLessonIndex,
  getLessonsCount,
} from '@/lib/tutorials';
import LessonContent from '@/components/LessonContent/LessonContent';
import LessonNavigation from '@/components/LessonNavigation/LessonNavigation';
import LessonProgress from '@/components/LessonProgress/LessonProgress';
import LessonBack from '@/components/LessonActions/LessonBack/LessonBack';
import LessonTop from '@/components/LessonActions/LessonTop/LessonTop';
import css from './page.module.css';

interface LessonPageProps {
  params: Promise<{
    id: string;
    lesson: string;
  }>;
}

// Статична генерація всіх уроків під час білду
export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { id, lesson } = await params;

  const currentLesson = getLessonById(id, lesson);

  if (!currentLesson) {
    return {};
  }

  const url = `/tutorials/${id}/${lesson}`;

  return {
    title: currentLesson.title,
    description: currentLesson.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: currentLesson.title,
      description: currentLesson.description,
      url,
    },
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id, lesson } = await params;

  const currentLesson = getLessonById(id, lesson);

  if (!currentLesson) {
    notFound();
  }

  const current = getLessonIndex(id, lesson) + 1;
  const total = getLessonsCount(id);
  const previousLesson = getPreviousLesson(id, lesson);
  const nextLesson = getNextLesson(id, lesson);

  return (
    <article className={css.page}>
      <LessonProgress current={current} total={total} />

      <LessonBack tutorialId={id} />

      <h1 className={css.title}>{currentLesson.title}</h1>

      <p className={css.description}>{currentLesson.description}</p>

      <div className={css.content}>
        <LessonContent content={currentLesson.content} />
      </div>

      <LessonTop />

      <LessonNavigation tutorialId={id} previous={previousLesson} next={nextLesson} />
    </article>
  );
}
